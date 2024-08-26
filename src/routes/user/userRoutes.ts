import { Router, Request, Response } from 'express';

import { validateUserSignup } from '../../middlewares/validationMiddleware';
import { userController } from '../../config/initializers/initializeUserController';

const router = Router();

router.post('/signup', validateUserSignup, (req:Request, res:Response) => userController.createUser(req, res));

export default router;