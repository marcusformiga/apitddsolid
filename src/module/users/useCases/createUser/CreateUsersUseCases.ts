import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { User } from "../../entities/User";
import { IUserRepository } from "../../repositories/interfaces/ICreateUserRepository";

interface IRequest {
  name: string;
  email: string;
  password: string;
}
@injectable()
export class CreateUserUseCases {
  constructor(
    @inject("UserRepository")
    private createUserRepository: IUserRepository
  ) { }
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const userExists = await this.createUserRepository.findByEmail(email);
    if (userExists) {
      throw new AppError(`Usuário com o email ${email} já está cadastrado`, 409);
    }
    const hashedPassword = await hash(password, 10);
    const user = await this.createUserRepository.create({
      name,
      email,
      password: hashedPassword,
    });
    return user;
  }
}
