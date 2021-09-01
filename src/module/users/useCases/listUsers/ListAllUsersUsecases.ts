import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { ICreateUserRepository } from "../../repositories/interfaces/ICreateUserRepository";

@injectable()
export class ListAllUsersUseCases {
  constructor(
    @inject("UserRepository")
    private usersRepository: ICreateUserRepository
  ) {}
  public async execute(): Promise<User[] | undefined> {
    const users = await this.usersRepository.findAll();
    return users;
  }
}
