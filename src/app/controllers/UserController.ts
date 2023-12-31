import { Request, Response, Router } from "express";
import User from "../entities/User";
import UserRepository from "../repositories/UserRepository";
import IUser from "../interfaces/IUser";

const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response): Promise<Response> => {
    const users = await UserRepository.getUsers();
    return res.status(200).json(users);
});

userRouter.post('/', async (req: Request, res: Response): Promise<Response> => {
    const { name, email } = req.body;

    const newUser = await UserRepository.postUser({name, email });

    return res.status(200).json(newUser);
});

export default userRouter;