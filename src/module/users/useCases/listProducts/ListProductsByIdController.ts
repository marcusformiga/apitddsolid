import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProductsByIdUseCases } from "./ListProductsByIdUseCases";

export class ListProductsByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.body
    const list = container.resolve(ListProductsByIdUseCases)
    const products = await list.execute(id)
    return response.json(products)
  }
}