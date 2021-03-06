import { CreateUserDto } from "../../entities/dto/CreateUserDto"
import { User } from "../../entities/User"

export interface IUserRepository {
  create(data: CreateUserDto): Promise<User>
  findByEmail(email: string): Promise<User | undefined>
  findAll(): Promise<User[] | undefined>
  findById(id: string): Promise<User | undefined>
  remove(id: string): Promise<void>
}
