import { NextFunction, Request, Response } from "express";
import { authsecret } from "../module/users/useCases/authUser/AuthUserUseCases";
import { AppError } from "../shared/errors/AppError";
import { verify } from "jsonwebtoken"
import { UsersRepository } from "../module/users/repositories/implementations/UsersRepository";

interface IPayload {
  sub: string
}
export async function ensureAuthenticated(req: Request, resp: Response, next: NextFunction) {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    throw new AppError("Token não enviado");
  }
  const [bearer, token] = authHeader.split(" ")
  try {
    const { sub: user_id } = verify(token, authsecret) as IPayload
    const userRepository = new UsersRepository()
    const user = await userRepository.findById(user_id)
    // overwrite
    req.user = {
      id: user_id
    }
    if (!user) {
      throw new AppError("Usuario não existe", 401);

    }
    next()
  } catch (err) {
    throw new AppError("Token incorreto", 401)
  }
}