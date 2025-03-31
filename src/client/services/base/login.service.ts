import { constantsENV } from 'client/config/constants';

import BaseService from "../utils/BaseService";

const loginService = new BaseService (constantsENV.ENDPOINT.login);

export default loginService;


