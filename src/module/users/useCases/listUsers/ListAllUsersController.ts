import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllUsersUseCases } from "./ListAllUsersUsecases";

export class ListAllUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const listAllUsers = container.resolve(ListAllUsersUseCases);
    const users = await listAllUsers.execute();
    return response.status(200).json(users);
  }
}
