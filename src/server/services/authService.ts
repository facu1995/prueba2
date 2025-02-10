import axios, { AxiosResponse } from "axios"
import { NextFunction, Request } from "express"

interface LoginCredentials {
  user: string,
  password: string
}

const authenticateUser = async (data: LoginCredentials, req: Request, next: NextFunction): Promise<AxiosResponse | void> => {
  let config = {
    method: 'post',
    maxBodyLength: Infinity,
    url: `https://auth-test.infosis.tech/oauth/token?grant_type=client_credentials&username=${data.user}&password=${data.password}`,
    headers: { 
      'Authorization': 'Basic'
    }
  };
  try {
    const response = await axios.request(config)
    return response
  } catch (e) {
    req.headers.src = 'AuthService' ///add a header with the service name to track the error
    return next(e as unknown as AxiosResponse)
  }
}

export default authenticateUser
