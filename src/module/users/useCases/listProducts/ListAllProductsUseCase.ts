import { inject, injectable } from "tsyringe"
import { Product } from "../../entities/Product"
import { IProductRepository } from "../../repositories/interfaces/ICreateProductRepository"

@injectable()
export class ListProductsUseCases {
  constructor(
    @inject("ProductRepository")
    private productsRepository: IProductRepository,
  ) {}
  public async execute(): Promise<Product[]> {
    const products = await this.productsRepository.find()
    return products
  }
}
