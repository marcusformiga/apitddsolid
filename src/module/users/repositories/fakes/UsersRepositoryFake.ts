import { CreateUserDto } from "../../entities/dto/CreateUserDto"
import { User } from "../../entities/User"
import { IUserRepository } from "../interfaces/ICreateUserRepository"

export class UsersRepositoryFake implements IUserRepository {
  private users: User[] = []
  public async create({ name, email, password }: CreateUserDto): Promise<User> {
    const user = new User()
    user.name = name
    user.email = email
    user.password = password
    this.users.push(user)
    return user
  }
  public async findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find(user => user.email === email)
    return user
  }
  public async findAll(): Promise<User[] | undefined> {
    const users = this.users
    return users
  }
  public async findById(id: string): Promise<User | undefined> {
    const user = this.users.find(user => user.id === id)
    return user
  }
  public async remove(id: string): Promise<void> {
    const userExists = this.users.findIndex(user => user.id === id)
    this.users.splice(userExists, 1)
  }
  // public async update(id: string, data: string){
  // const userIndex = this.users.findIndex(user => user.id === id)
  // this.users[userIndex].att = data
  // atualizacao fake
  //}
}
