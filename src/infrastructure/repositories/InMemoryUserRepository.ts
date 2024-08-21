import { UserRepository } from '../../interfaces/repositories/UserRepository'
import { User } from '../../domain/entities/User'

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = []

  async save(user: User): Promise<User> {
    this.users.push(user)
    return user
  }

  async findById(id: string): Promise<User | null> {
    const user = this.users.find((user) => user.id === id)
    return user || null
  }

  async findAll(): Promise<User[]> {
    return this.users
  }
}
