import { User } from "../../entities/types/user/User";
import { UserModel } from "../../framework/database/models/UserModel";
import { IUserRepository } from "./IUserRepository";

export class UserRepository implements IUserRepository{
    async CreateUser(user: User): Promise<any> {
      return UserModel.create(user);
    }
}