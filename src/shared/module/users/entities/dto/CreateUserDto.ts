export class CreateUserDto {
  id?: string;
  name: string;
  password: string;
  email: string;
  created_at?: Date;
  updated_at?: Date;
}
