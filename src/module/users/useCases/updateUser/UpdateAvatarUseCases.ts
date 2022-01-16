import path from "path"
import fs from "fs"
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { IUserRepository } from "../../repositories/interfaces/ICreateUserRepository"
import multerConfig from "../../../../config/MulterConfig"

interface IRequest {
  user_id: string
  avatar: string
}
@injectable()
export class UpdateAvatarUseCases {
  constructor(
    @inject("UserRepository") private readonly usersRepository: IUserRepository,
  ) {}
  public async execute({ user_id, avatar }: IRequest) {
    const user = await this.usersRepository.findById(user_id)
    if (!user) {
      throw new AppError("Usuario não encontrado", 404)
    }

    if (user.avatar_url) {
      const userAvatarFilePath = path.join(
        multerConfig.directory,
        user.avatar_url,
      )
      // deleta arquivos de avatar caso exista
      // depois salva o novo usuario com avatar
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath)
      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath)
      }
      user.avatar_url = avatar
    }
    await this.usersRepository.create(user)
    return user
  }
}
