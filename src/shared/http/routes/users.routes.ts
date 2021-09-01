import { Router } from "express";
import { CreateUsersController } from "../../../module/users/useCases/createUser/CreateUsersController";
import { ListAllUsersController } from "../../../module/users/useCases/listUsers/ListAllUsersController";

export const usersRouter = Router();
const createUsersController = new CreateUsersController();
const listAllUsersController = new ListAllUsersController();
usersRouter.post("/", createUsersController.handle);
usersRouter.get("/", listAllUsersController.handle);
