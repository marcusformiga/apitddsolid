import { inject, injectable } from "tsyringe";
import { CreateProductDto } from "../../entities/dto/CreateProductDto";
import { Product } from "../../entities/Product";
import { ICreateProductRepository } from "../../repositories/interfaces/ICreateProductRepository";

@injectable()
export class CreateProductsUseCases {
  constructor(
    @inject("ProductRepository")
    private productsRepository: ICreateProductRepository
  ) {}
  public async execute({
    name,
    description,
    price,
    quantity,
  }: CreateProductDto): Promise<Product> {
    const product = await this.productsRepository.create({
      name,
      description,
      price,
      quantity,
    });
    return product;
  }
}
