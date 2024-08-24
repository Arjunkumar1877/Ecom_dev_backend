import { Router } from 'express';
import { createUser } from '../../controllers/user/userController/userController';

const router = Router();

router.post('/create', createUser);

export default router;