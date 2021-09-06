import { ICreateUserRepository } from "../../module/users/repositories/interfaces/ICreateUserRepository";
import { UsersRepository } from "../../module/users/repositories/implementations/UsersRepository";
import { container } from "tsyringe";
import { ICreateProductRepository } from "../../module/users/repositories/interfaces/ICreateProductRepository";
import { ProductsRepository } from "../../module/users/repositories/implementations/ProductsRepository";

container.registerSingleton<ICreateUserRepository>(
  "UserRepository",
  UsersRepository
);

container.registerSingleton<ICreateProductRepository>(
  "ProductRepository",
  ProductsRepository
);
