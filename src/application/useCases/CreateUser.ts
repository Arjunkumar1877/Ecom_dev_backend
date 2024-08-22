import { User } from '../../domain/entities/User'
import { UserRepository } from '../../interfaceAdapters/repositories/UserRepository'

export class CreateUser {
    constructor(private userRepository: UserRepository) { }

    async execute(name: string, email: string, password: string): Promise<User> {
        const user = new User(Date.now().toString(), name, email, password)
        return this.userRepository.save(user)
    }
}
