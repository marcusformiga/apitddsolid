import { Router } from "express";
import { CreateUsersController } from "../../../module/users/useCases/createUser/CreateUsersController";
export const usersRouter = Router();
const createUsersController = new CreateUsersController();

usersRouter.post("/", createUsersController.handle);
