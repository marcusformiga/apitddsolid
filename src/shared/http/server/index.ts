import "reflect-metadata";
import express, { NextFunction, Request, Response } from "express";
import "express-async-errors";
import "../../database/index";
import "../../container/index";
import { AppError } from "../../errors/AppError";
import { usersRouter } from "../routes/users.routes";
const server = express();
const port = 3001;

server.use(express.json());

server.get("/test", (request: Request, response: Response) => {
  return response.status(200).send("Rota de teste");
});
server.use("/users", usersRouter);
server.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: "error",
        message: error.message,
      });
    }
    console.log(error);
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
);
server.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
