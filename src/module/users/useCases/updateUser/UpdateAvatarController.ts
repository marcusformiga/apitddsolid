import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateAvatarUseCases } from "./UpdateAvatarUseCases"

export class UpdateUserAvatarController {
  public async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user
    const avatar = request.file?.filename as string
    const updateAvatar = container.resolve(UpdateAvatarUseCases)
    const userUpdated = await updateAvatar.execute({ user_id: id, avatar })
    return response.status(204)
  }
}
