import axios from "axios";
import { constants } from "../config/constants";
import { Example } from "../pages/FirstRouteContent";

export const getTest = async ( signal?: AbortSignal): Promise<string> => {
  const config = {
    signal,
  };

  const response = await axios.get(constants.API_BASE_URL, config);
  return response.data;
};


export const PostTest = async (signal?: AbortSignal, payload?: Example): Promise<string> => {
  const config = {
    signal,
  };

  const response = await axios.post(constants.API_BASE_URL, payload, config);
  return response.data;
};
