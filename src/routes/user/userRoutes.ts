import { Router } from 'express';
import { createUser } from '../../controllers/user/userController/userController';
import { validateUserSignup } from '../../middlewares/validationMiddleware';

const router = Router();

router.post('/signup', validateUserSignup, createUser);

export default router;