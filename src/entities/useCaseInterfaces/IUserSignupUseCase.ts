import { User } from "../types/user/User";

export interface IUserSignupUseCase{
 SignupUser(user: User): Promise<any>;
}