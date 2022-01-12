import { CreateUserDto } from "./dto/CreateUserDto";
import { randomUUID } from "crypto";
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
      this.id = randomUUID();
      this.is_admin = true;
    }
  }
}
