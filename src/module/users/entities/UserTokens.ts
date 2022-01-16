import { CreateUserDto } from "./dto/CreateUserDto"
import { randomUUID } from "crypto"
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm"
@Entity("users_tokens")
export class UserTokens {
  @PrimaryColumn()
  id?: string
  @Column()
  name: string
  @Generated("uuid")
  @Column()
  token: string
  @Column()
  user_id: string
  @Column()
  email: string
  @CreateDateColumn()
  created_at?: Date
  constructor() {
    if (!this.id) {
      this.id = randomUUID()
    }
  }
}
