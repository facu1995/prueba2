import { useState, useEffect, useRef, useCallback } from "react";
interface UseApiResult<T, P> {
  data: T | null;
  loading: boolean;
  error: string | null;
  call: (params?: P) => Promise<void>;
}

function useApi<T, P = void>(
  callFunction: (signal: AbortSignal, params?: P) => Promise<T>,
  options: {
    initialParams?: P;
    autoCall?: boolean;
    onSuccess?: (data: T) => void;
    onError?: (error: string) => void;
  } = {}
): UseApiResult<T, P> {
  const { initialParams, autoCall = true, onSuccess, onError } = options;
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const call = useCallback(async (params?: P) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setLoading(true);
    setError(null);
    try {
      const result = await callFunction(controller.signal, params);
      setData(result);
      if (onSuccess) onSuccess(result);
    } catch (err: any) {
      if (err.name === "AbortError") {
        console.log("Request aborted");
      } else {
        setError(err instanceof Error ? `Error: ${err.message}` : "Unknown error");
        if (onError) onError(err instanceof Error ? err.message : "Unknown error");
      }
    } finally {
      setLoading(false);
    }
  }, [callFunction, onSuccess, onError]);

  useEffect(() => {
    if (autoCall && initialParams !== undefined) {
      call(initialParams);
    }
  }, [JSON.stringify(options)]);

  useEffect(() => {
    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    }
  }, []);

  return { data, loading, error, call };
}

export default useApi;
