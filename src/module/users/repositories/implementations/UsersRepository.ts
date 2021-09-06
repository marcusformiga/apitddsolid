import { getRepository, Repository } from "typeorm";
import { CreateUserDto } from "../../entities/dto/CreateUserDto";
import { User } from "../../entities/User";
import { ICreateUserRepository } from "../interfaces/ICreateUserRepository";

export class UsersRepository implements ICreateUserRepository {
  userRepository: Repository<User>;
  constructor() {
    this.userRepository = getRepository(User);
  }

  public async create({ name, email, password }: CreateUserDto): Promise<User> {
    const user = new User();
    user.name = name;
    user.email = email;
    user.password = password;
    this.userRepository.create(user);
    await this.userRepository.save(user);
    return user;
  }
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne(email);
    return user;
  }
  public async findAll(): Promise<User[] | undefined> {
    const users = await this.userRepository.find();
    return users;
  }
  public async findById(id: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne(id);
    return user;
  }
  public async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }
}
