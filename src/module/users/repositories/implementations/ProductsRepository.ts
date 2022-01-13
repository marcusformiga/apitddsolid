import { getRepository, Repository } from "typeorm";
import { CreateProductDto } from "../../entities/dto/CreateProductDto";
import { Product } from "../../entities/Product";
import { IProductRepository } from "../interfaces/ICreateProductRepository";

export class ProductsRepository implements IProductRepository {
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
  public async find(): Promise<Product[]> {
    const products = await this.productsRepository.find()
    return products
  }
  public async findById(id: string): Promise<Product | undefined> {
    const products = await this.productsRepository.findOne(id)
    return products
  }
}
