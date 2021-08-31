import { CreateUserDto } from "../../entities/dto/CreateUserDto";
import { User } from "../../entities/User";

export interface ICreateUserRepository {
  create(data: CreateUserDto): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
