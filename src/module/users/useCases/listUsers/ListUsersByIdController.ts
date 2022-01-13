import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUsersByIdUseCases } from "./ListUsersByIdUseCases";
export class ListUsersByIdController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const listAllUsers = container.resolve(ListUsersByIdUseCases);
    const user = await listAllUsers.execute(id);
    return response.status(200).json(user);
  }
}
