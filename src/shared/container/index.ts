import { ICreateUserRepository } from "../../module/users/repositories/interfaces/ICreateUserRepository";
import { UsersRepository } from "../../module/users/repositories/implementations/UsersRepository";
import { container } from "tsyringe";

container.registerSingleton<ICreateUserRepository>(
  "UserRepository",
  UsersRepository
);
