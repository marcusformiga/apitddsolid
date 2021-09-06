import { CreateProductDto } from "../../entities/dto/CreateProductDto";
import { Product } from "../../entities/Product";

export interface ICreateProductRepository {
  create(data: CreateProductDto): Promise<Product>;
}
