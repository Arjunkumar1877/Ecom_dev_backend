import { Router } from 'express'
import { UserController } from '../controllers/UserController'
import { CreateUser } from '../../application/useCases/CreateUser'
import { InMemoryUserRepository } from '../repositories/InMemoryUserRepository'

const userRoutes = Router()

const userRepository = new InMemoryUserRepository()
const createUser = new CreateUser(userRepository)
const userController = new UserController(createUser)

userRoutes.post('/users', userController.create)

export { userRoutes }
