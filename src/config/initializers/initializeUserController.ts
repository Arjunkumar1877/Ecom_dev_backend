import UserController from "../../controllers/user/userController/userController";
import { userSignupService } from "../../services/userService/passwordBcrypt";

export const userController = new UserController(userSignupService);