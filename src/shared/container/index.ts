import { IUserRepository } from "../../module/users/repositories/interfaces/ICreateUserRepository"
import { UsersRepository } from "../../module/users/repositories/implementations/UsersRepository"
import { container } from "tsyringe"
import { IProductRepository } from "../../module/users/repositories/interfaces/ICreateProductRepository"
import { ProductsRepository } from "../../module/users/repositories/implementations/ProductsRepository"

container.registerSingleton<IUserRepository>("UserRepository", UsersRepository)

container.registerSingleton<IProductRepository>(
  "ProductRepository",
  ProductsRepository,
)
