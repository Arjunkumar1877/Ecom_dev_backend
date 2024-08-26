import UserController from "../../controllers/user/userController/userController";
import { userSignupService } from "../../services/userService/userSignupService";

export const userController = new UserController(userSignupService);