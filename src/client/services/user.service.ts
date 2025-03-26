import { ParamSearch } from "../@types/services/BaseService.model";
import BasicService from "./BasicService";

interface User {
  id: number;
  name: string;
}

interface CreateUserPayload {
  name: string;
}

const userService = new BasicService<User, CreateUserPayload,ParamSearch>("/users");

// Ejemplo de uso:
const getUser = async () => {
  const user = await userService.get(new AbortController().signal);
  console.log(user); // user será de tipo User
};

const createUser = async () => {
  const newUser = await userService.post(new AbortController().signal, { name: "John Doe" });
  console.log(newUser); // newUser será de tipo User
};