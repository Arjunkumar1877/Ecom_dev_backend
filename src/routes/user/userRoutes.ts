import { Router } from 'express';
import { validateUserSignup } from '../../middlewares/validationMiddleware';
import UserController from '../../controllers/user/userController/userController';
import { Req, Res } from '../../type/user/express';

const router = Router();
const userController = new UserController();


// ********************************************| USER SIGNUP AND SAVING DATA TO DB ***********************************************************************************************************************************************************|
router.post('/signup', validateUserSignup, (req: Req, res: Res) => userController.createUser(req, res));


// ********************************************| SENDING EMAIL OTP AND UPDATING TO DB ************************************************************************************************************************************************************|
router.post('/send_email_otp', (req: Req, res: Res)=> userController.sendEmail(req, res));


// ********************************************| VERIFYING THE USER ENTERED OTP ************************************************************************************************************************************************************|
router.post("/verify_otp", (req: Req, res: Res)=> userController.verifyOtp(req, res))











export default router;
