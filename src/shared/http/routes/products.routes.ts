import { Router } from "express";
import { CreateProductController } from "../../../module/users/useCases/createProducts/CreateProductsController";

export const productsRouter = Router();

const createProductController = new CreateProductController();

productsRouter.post("/", createProductController.handle);
