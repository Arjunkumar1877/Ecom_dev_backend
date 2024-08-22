import { User } from "../../entities/types/user/User";

export interface IUserRepository{
    CreateUser(user: User): Promise<any>;
} 