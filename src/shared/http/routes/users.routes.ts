import { Router } from "express";
import { CreateUsersController } from "../../../module/users/useCases/createUser/CreateUsersController";
import { DeleteUsersController } from "../../../module/users/useCases/DeleteUsers/DeleteUsersController";
import { ListAllUsersController } from "../../../module/users/useCases/listUsers/ListAllUsersController";
import { ListUsersByIdController } from "../../../module/users/useCases/listUsers/ListUsersByIdController";

export const usersRouter = Router();
const createUsersController = new CreateUsersController();
const listAllUsersController = new ListAllUsersController();
const deleteUsersController = new DeleteUsersController();
const listUsersByIdController = new ListUsersByIdController()

usersRouter.post("/", createUsersController.handle);
usersRouter.get("/", listAllUsersController.handle);
usersRouter.delete("/:id", deleteUsersController.handle);
usersRouter.get("/:id", listUsersByIdController.handle)