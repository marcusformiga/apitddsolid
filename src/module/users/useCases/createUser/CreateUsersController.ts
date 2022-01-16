import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateUserUseCases } from "./CreateUsersUseCases"

export class CreateUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body
    const createUsersUseCases = container.resolve(CreateUserUseCases)
    const users = await createUsersUseCases.execute({ name, email, password })
    return response.status(201).json({ users })
  }
}
