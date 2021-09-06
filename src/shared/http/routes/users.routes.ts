import { Router } from "express";
import { CreateUsersController } from "../../../module/users/useCases/createUser/CreateUsersController";
import { DeleteUsersController } from "../../../module/users/useCases/DeleteUsers/DeleteUsersController";
import { ListAllUsersController } from "../../../module/users/useCases/listUsers/ListAllUsersController";

export const usersRouter = Router();
const createUsersController = new CreateUsersController();
const listAllUsersController = new ListAllUsersController();
const deleteUsersController = new DeleteUsersController();

usersRouter.post("/", createUsersController.handle);
usersRouter.get("/", listAllUsersController.handle);
usersRouter.delete("/:id", deleteUsersController.handle);
