import { ParamSearch } from "./BaseService.model";

export interface Login {
  username: string
  password: string
}

export interface LoginParamSearch extends ParamSearch<Login> {
}
