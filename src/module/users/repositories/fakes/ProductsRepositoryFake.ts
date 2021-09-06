import { CreateProductDto } from "../../entities/dto/CreateProductDto";
import { Product } from "../../entities/Product";
import { ICreateProductRepository } from "../interfaces/ICreateProductRepository";

export class ProductsRepositoryFake implements ICreateProductRepository {
  private products: Product[] = [];
  public async create({
    name,
    description,
    price,
    quantity,
  }: CreateProductDto): Promise<Product> {
    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    product.quantity = quantity;
    this.products.push(product);
    return product;
  }
}
