import { constantsENV } from "client/config/constants";
import BaseService from "../utils/BaseService";

const authService = new BaseService (constantsENV.ENDPOINT.auth);

export default authService;


