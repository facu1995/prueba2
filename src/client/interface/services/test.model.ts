import { ParamSearch } from "./BaseService.model";

export interface TestContentResponse {
  id:         number;
  servers:    string;
  tenants:    string;
  users_type: string;
  date:       Date;
  message:    string;
  block:      boolean;
  active:     boolean;
}

export interface TestParamSearch extends ParamSearch<TestParamSearch> {
  active?: boolean;
  tenants?: number;
  servers?: number;
  usersType?: number;
}
