import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { Product } from "../../entities/Product"
import { IProductRepository } from "../../repositories/interfaces/ICreateProductRepository"

@injectable()
export class ListProductsByIdUseCases {
  constructor(
    @inject("ProductRepository")
    private productsRepository: IProductRepository,
  ) {}
  public async execute(id: string): Promise<Product | undefined> {
    const products = await this.productsRepository.findById(id)
    console.log(products)
    if (!products) {
      throw new AppError("Produto não encontrado", 404)
    }
    return products
  }
}
