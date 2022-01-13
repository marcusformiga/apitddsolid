import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/interfaces/ICreateUserRepository";

@injectable()
export class ListUsersByIdUseCases {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository
  ) { }
  public async execute(id: string): Promise<User | undefined> {
    const user = await this.usersRepository.findById(id);
    if (!user) {
      throw new AppError("Usuario nao encontrado", 404)
    }
    return user;
  }
}
