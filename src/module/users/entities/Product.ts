import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { CreateProductDto } from "./dto/CreateProductDto";
import { randomUUID } from "crypto";
@Entity("products")
export class Product implements CreateProductDto {
  @PrimaryColumn()
  id?: string;
  @Column()
  name: string;
  @Column()
  price: number;
  @Column()
  description: string;
  @Column()
  quantity: number;
  @CreateDateColumn()
  created_at?: Date;
  @UpdateDateColumn()
  updated_at?: Date;
  constructor() {
    if (!this.id) {
      this.id = randomUUID();
    }
  }
}
