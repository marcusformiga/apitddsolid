import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateUserRepository } from "../../repositories/interfaces/ICreateUserRepository";

@injectable()
export class DeleteUsersUseCases {
  constructor(
    @inject("UserRepository") private usersRepository: ICreateUserRepository
  ) {}
  public async execute(id: string): Promise<void> {
    const userExists = await this.usersRepository.findById(id);
    if (!userExists) {
      throw new AppError(`Não existe usuário com id ${id} informado`, 404);
    }
    await this.usersRepository.remove(id);
  }
}
