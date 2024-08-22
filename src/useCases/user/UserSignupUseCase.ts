import { User } from "../../entities/types/user/User";
import { IUserSignupUseCase } from "../../entities/useCaseInterfaces/IUserSignupUseCase";
import { IUserRepository } from "../../interfaceAdapters/repositories/IUserRepository";


export class UserSignupUseCase  implements IUserSignupUseCase{
    constructor(private iuserRepository: IUserRepository){}

    async SignupUser(user: User): Promise<any> {
        return this.iuserRepository.CreateUser(user);
    }
}