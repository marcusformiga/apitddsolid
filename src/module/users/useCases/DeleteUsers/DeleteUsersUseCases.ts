import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { IUserRepository } from "../../repositories/interfaces/ICreateUserRepository"

@injectable()
export class DeleteUsersUseCases {
  constructor(
    @inject("UserRepository") private usersRepository: IUserRepository,
  ) {}
  public async execute(id: string): Promise<void> {
    const userExists = await this.usersRepository.findById(id)
    if (!userExists) {
      throw new AppError(`Não existe usuário com id ${id} informado`, 404)
    }
    await this.usersRepository.remove(id)
  }
}
