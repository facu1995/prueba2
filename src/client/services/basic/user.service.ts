import { ParamSearch } from "../../interface";
import BasicService from "../utils/BasicService";

export interface User {
  id: number;
  name: string;
}

export interface CreateUserPayload {
  name: string;
}


export const userService = new BasicService<User, CreateUserPayload, ParamSearch>("/users");

