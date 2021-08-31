import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../entities/User";
import { ICreateUserRepository } from "../../repositories/interfaces/ICreateUserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}
@injectable()
export class CreateUserUseCases {
  constructor(
    @inject("UserRepository")
    private createUserRepository: ICreateUserRepository
  ) {}
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userExists = await this.createUserRepository.findByEmail(email);

    if (userExists) {
      throw new AppError(`Usuário com o email ${email} já está cadastrado`);
    }
    const hashedPassoword = await hash(password, 10);
    const user = await this.createUserRepository.create({
      name,
      email,
      password: hashedPassoword,
    });
    return user;
  }
}