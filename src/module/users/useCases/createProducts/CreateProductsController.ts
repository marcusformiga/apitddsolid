import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductsUseCases } from "./CreateProductsUseCases";

export class CreateProductController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, description, price, quantity } = request.body;
    const createProductsUseCases = container.resolve(CreateProductsUseCases);
    const product = await createProductsUseCases.execute({
      name,
      description,
      price,
      quantity,
    });
    return response.status(201).json(product);
  }
}
