import { GlobalToast } from "@components/index"
import { IToast } from "@interface/index"
import React, { createContext, useContext, useState, ReactNode, useRef, useMemo } from "react"


interface IToastContextValue {
  showToast: (toast: IToast) => void
}

const ToastContext = createContext<IToastContextValue | undefined>(undefined)

export const useGlobalToast = () => {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useContext debe ser usado dentro de un ToastProvider")
  }
  return context
}

interface ToastProviderProps {
  children: ReactNode
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<IToast | null>(null)
  const timeoutRef = useRef<number | null>(null)

  const showToast = (alert: IToast) => {
    setToast(alert)
    timeoutRef.current = window.setTimeout(() => {
      setToast(null)
    }, 2000)
  }

  const hideToast = () => {
    setToast(null)
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current)
    }
  }

  const ToastContextValue = useMemo(() => ({ showToast }), [showToast])

  return (
    <ToastContext.Provider value={ToastContextValue}>
      {children}
      {toast && <GlobalToast hideToast={hideToast} toast={toast} />}
    </ToastContext.Provider>
  )
}
