import { Router } from 'express'
import { InjectedUserSignUpController } from '../injection/user/UserInjections'
const userRoutes = Router()



userRoutes.post('/user_signup', InjectedUserSignUpController.SignupUserControl.bind(InjectedUserSignUpController));

export { userRoutes }
