import { User } from "../../domain/entities/User";

export interface UserRepository {

    save(user: User): Promise<User>;
    findById(id:string): Promise<User | null>
    findAll(): Promise<User[]>;
}