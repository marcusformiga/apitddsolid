import { CreateUserDto } from "./dto/CreateUserDto";
import { v4 as uuidv4 } from "uuid";
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
@Entity("users")
export class User implements CreateUserDto {
  @PrimaryColumn()
  id?: string;
  @Column()
  name: string;
  @Column()
  password: string;
  @Column()
  is_admin: boolean;
  @Column()
  email: string;
  @CreateDateColumn()
  created_at?: Date;
  @UpdateDateColumn()
  updated_at?: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
      this.is_admin = true;
    }
  }
}
