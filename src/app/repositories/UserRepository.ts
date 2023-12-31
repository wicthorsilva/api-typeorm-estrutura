import User from "../entities/User";
import IUser from "../interfaces/IUser";
import { AppDataSource } from "../../database/data-source";

const userRepository = AppDataSource.getRepository(User);

const getUsers = (): Promise<IUser[]> => {
    return userRepository.find();
}


const postUser = async (userData: IUser): Promise<IUser> => {
    const newUser = userRepository.create(userData);
    await userRepository.save(newUser);
    return newUser;
}


export default {getUsers, postUser};