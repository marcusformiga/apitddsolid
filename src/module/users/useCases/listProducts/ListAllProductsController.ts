import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProductsUseCases } from "./ListAllProductsUseCase";

export class ListAllProductsController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const list = container.resolve(ListProductsUseCases)
    const products = await list.execute()
    return response.json(products)
  }
}