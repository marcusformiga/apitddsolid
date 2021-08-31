import { CreateUserDto } from "../../entities/dto/CreateUserDto";
import { User } from "../../entities/User";
import { ICreateUserRepository } from "../interfaces/ICreateUserRepository";

export class UsersRepositoryFake implements ICreateUserRepository {
  private users: User[] = [];
  public async create({ name, email, password }: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    this.users.push(user);
    return user;
  }
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.email === email);
    return user;
  }
}
