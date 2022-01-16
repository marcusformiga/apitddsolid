import { CreateProductDto } from "../../entities/dto/CreateProductDto"
import { Product } from "../../entities/Product"

export interface IProductRepository {
  create(data: CreateProductDto): Promise<Product>
  find(): Promise<Product[]>
  findById(id: string): Promise<Product | undefined>
}
