import { CreateUserDto } from "./dto/CreateUserDto";
import { v4 as uuidv4 } from "uuid";
export class User implements CreateUserDto {
  id?: string;
  name: string;
  password: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
