import { ICreateUserRepository } from "../../module/users/repositories/interfaces/ICreateUserRepository";
import { UsersRepository } from "../../module/users/repositories/implementations/UsersRepository";
import { container, delay } from "tsyringe";

container.registerSingleton<ICreateUserRepository>(
  "UserRepository",
  delay(() => UsersRepository)
);
