import { getRepository, Repository } from "typeorm";
import { CreateUserDto } from "../../entities/dto/CreateUserDto";
import { User } from "../../entities/User";
import { ICreateUserRepository } from "../interfaces/ICreateUserRepository";

export class UsersRepository implements ICreateUserRepository {
  userRepository: Repository<User>;
  constructor() {
    this.userRepository = getRepository(User);
  }
  async create({ name, email, password }: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    this.userRepository.create(user);
    await this.userRepository.save(user);
    return user;
  }
  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne(email);
    return user;
  }
}
