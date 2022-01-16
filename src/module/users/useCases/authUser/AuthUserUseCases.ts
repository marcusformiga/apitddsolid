import { compare } from "bcrypt"
import { inject, injectable } from "tsyringe"
import { AppError } from "../../../../shared/errors/AppError"
import { IUserRepository } from "../../repositories/interfaces/ICreateUserRepository"
import { sign } from "jsonwebtoken"
export const authsecret = "hsauehsauehasuehs31w31"

interface IRequest {
  email: string
  password: string
}
interface IResponse {
  user: {
    name: string
    email: string
  }
  token: string
}
@injectable()
export class AuthUserUseCases {
  constructor(
    @inject("UserRepository") private readonly userRepository: IUserRepository,
  ) {}
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    // verificar se o usuario existe
    const user = await this.userRepository.findByEmail(email)
    if (!user) {
      throw new AppError("Usuário/password incorretos", 401)
    }
    // verificar se a senha esta correta
    const matchPassword = await compare(password, user.password)
    if (!matchPassword) {
      throw new AppError("Usuário/password incorretos")
    }

    // gerar o token
    const token = sign({}, authsecret, {
      subject: user.id,
      expiresIn: "1d",
    })
    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    }
  }
}
