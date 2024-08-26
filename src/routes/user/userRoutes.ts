import { Router } from 'express';
import { validateUserSignup } from '../../middlewares/validationMiddleware';
import UserController from '../../controllers/user/userController/userController';
import { Req, Res } from '../../type/user/express';

const router = Router();
const userController = new UserController();



router.post('/signup', validateUserSignup, (req: Req, res: Res) => userController.createUser(req, res));

export default router;
