import { inject, injectable } from "tsyringe"
import { User } from "../../entities/User"
import { IUserRepository } from "../../repositories/interfaces/ICreateUserRepository"

@injectable()
export class ListAllUsersUseCases {
  constructor(
    @inject("UserRepository")
    private usersRepository: IUserRepository,
  ) {}
  public async execute(): Promise<User[] | undefined> {
    const users = await this.usersRepository.findAll()
    return users
  }
}
