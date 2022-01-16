import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteUsersUseCases } from "./DeleteUsersUseCases"

export class DeleteUsersController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params
    const deleteUsersUseCases = container.resolve(DeleteUsersUseCases)
    await deleteUsersUseCases.execute(id)
    return response.status(204).send([])
  }
}
