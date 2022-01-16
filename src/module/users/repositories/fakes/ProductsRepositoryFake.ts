import { CreateProductDto } from "../../entities/dto/CreateProductDto"
import { Product } from "../../entities/Product"
import { IProductRepository } from "../interfaces/ICreateProductRepository"

export class ProductsRepositoryFake implements IProductRepository {
  private products: Product[] = []
  public async create({
    name,
    description,
    price,
    quantity,
  }: CreateProductDto): Promise<Product> {
    const product = new Product()
    product.name = name
    product.description = description
    product.price = price
    product.quantity = quantity
    this.products.push(product)
    return product
  }
  public async find(): Promise<Product[]> {
    return this.products
  }
  public async findById(id: string): Promise<Product | undefined> {
    const product = this.products.find(prod => prod.id === id)
    return product
  }
}
