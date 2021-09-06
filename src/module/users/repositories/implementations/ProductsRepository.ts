import { getRepository, Repository } from "typeorm";
import { CreateProductDto } from "../../entities/dto/CreateProductDto";
import { Product } from "../../entities/Product";
import { ICreateProductRepository } from "../interfaces/ICreateProductRepository";

export class ProductsRepository implements ICreateProductRepository {
  productsRepository: Repository<Product>;
  constructor() {
    this.productsRepository = getRepository(Product);
  }
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
    this.productsRepository.create(product);
    await this.productsRepository.save(product);
    return product;
  }
}
