import axios, { AxiosResponse } from "axios"
import { NextFunction, Request } from "express";
//import endpoint from "../config/constants"


export const testEncryService = async (req: Request, next: NextFunction) => {
  
  const {authorization} = req.headers || ''

  try {
    const config = {
      method: "post",
      url: "endpoint",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: authorization
      },
      data: req.body
    }
    const response = await axios.request(config)
    return response
  } catch (e) {
    req.headers.src = 'testEncryService' ///add a header with the service name to track the error
    return next(e as unknown as AxiosResponse)
  }
}

export const testServiceSearch = async (req: Request, next: NextFunction) => {
  const queryParams = req.query; // Extract query parameters from the request

  try {
    const config = {
      method: "get",
      url: "https://ws-test.infosis.tech/zeus-admin-messages/messages/search",
      headers: {
        accept: "*/*",
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzY29wZSI6WyJBTk9OWU1PVVNfUkVBRCIsIkFOT05ZTU9VU19XUklURSIsIlVTRVJfUkVBRCIsIlVTRVJfV1JJVEUiLCJBRE1JTl9SRUFEIiwiQURNSU5fV1JJVEUiXSwiZXhwIjoxNzQzMDIyNDM0LCJhdXRob3JpdGllcyI6WyJVU0VSIiwiQU5PTllNT1VTIiwiQURNSU4iXSwianRpIjoiZTI3OWZkMDktMjhkNS00NjkyLWFjMTgtYjNmZWUzY2RmNjk0IiwiY2xpZW50X2lkIjoid2l6YXJkIn0.GWlQwCAG82CNzpk6lmR7DfPlHDgSjanm51aem4vQbPp5ynROlzf_E0rDffZiYThRUvPcF8BjCLPhwDbo7zo5gmMQ4PGwbyq0H2h_vYt2JK26Ml4JMPV5k5mmkNNwBxIwkd1QASmLYmi9Oc7ihbKNDg8izQNEhYaiyng8wBAmYOpDNmmzkWuypf-un-8wfPUoCfT5qn2spO9porVeQKthER-ktCFscnyJ1NjsristW1_Ck4w4fi9W3AI4i6Rn0KDQyrvMXevSXh7Wlux9956cm3khFwkWWyIUjjPIh3t7t8i1m4hYDXOhXOoiGgDhkfxplL2fO8B_b-TeK4XzS0w4DQ",
      },
      params: queryParams, // Pass query parameters to the request
      data: req.body,
    };
    const response = await axios.request(config);
    return response;
  } catch (e) {
    req.headers.src = 'testService'; // Add a header with the service name to track the error
    return next(e as unknown as AxiosResponse);
  }
};