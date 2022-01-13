import { Router } from "express";
import { CreateProductController } from "../../../module/users/useCases/createProducts/CreateProductsController";
import { ListAllProductsController } from "../../../module/users/useCases/listProducts/ListAllProductsController";
import { ListProductsByIdController } from "../../../module/users/useCases/listProducts/ListProductsByIdController";

export const productsRouter = Router();

const createProductController = new CreateProductController();
const listProductsController = new ListAllProductsController()
const listProductByIdController = new ListProductsByIdController()

productsRouter.post("/", createProductController.handle);
productsRouter.get("/", listProductsController.handle)
productsRouter.get("/:id", listProductByIdController.handle)
