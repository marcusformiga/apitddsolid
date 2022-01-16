import { Request, Response } from "express"
import { container } from "tsyringe"
import { AuthUserUseCases } from "./AuthUserUseCases"

export class AuthUserController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body
    const authUser = container.resolve(AuthUserUseCases)
    const token = await authUser.execute({ email, password })
    return response.json(token)
  }
}
