import { Router } from "express";
import { ensureAuthenticated } from "../../../middlewares/ensureAuthenticated";
import { AuthUserController } from "../../../module/users/useCases/authUser/AuthUserController";
import { CreateUsersController } from "../../../module/users/useCases/createUser/CreateUsersController";
import { DeleteUsersController } from "../../../module/users/useCases/DeleteUsers/DeleteUsersController";
import { ListAllUsersController } from "../../../module/users/useCases/listUsers/ListAllUsersController";
import { ListUsersByIdController } from "../../../module/users/useCases/listUsers/ListUsersByIdController";

export const usersRouter = Router();
const createUsersController = new CreateUsersController();
const listAllUsersController = new ListAllUsersController();
const deleteUsersController = new DeleteUsersController();
const listUsersByIdController = new ListUsersByIdController()
const authUserController = new AuthUserController()

usersRouter.post("/", createUsersController.handle);
usersRouter.get("/", ensureAuthenticated, listAllUsersController.handle);
usersRouter.delete("/:id", deleteUsersController.handle);
usersRouter.get("/:id", listUsersByIdController.handle)
usersRouter.post("/login", authUserController.handle)
