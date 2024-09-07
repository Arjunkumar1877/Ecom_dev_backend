import { Router } from 'express';
import { validateUserSignup, handleValidationErrors } from '../../middlewares/validationMiddleware';
import UserController from '../../controllers/user/userController/userController';
import { Req, Res } from '../../type/user/express';
import { generateJwt } from '../../middlewares/jwtService';


const router = Router();
const userController = new UserController();


// ********************************************| USER SIGNUP AND SAVING DATA TO DB ***********************************************************************************************************************************************************|
router.post('/signup', validateUserSignup, handleValidationErrors, (req: Req, res: Res) => userController.createUser(req, res));


// ********************************************| SENDING EMAIL OTP AND UPDATING TO DB ************************************************************************************************************************************************************|
router.post('/send_email_otp', (req: Req, res: Res)=> userController.sendEmail(req, res));


// ********************************************| VERIFYING THE USER ENTERED OTP ******************************************************************************************************************************************************************|
router.post("/verify_otp", (req: Req, res: Res)=> userController.verifyOtp(req, res));


// ********************************************| USER LOGIN AND JWT GENERATION *******************************************************************************************************************************************************************|
router.post('/login', generateJwt, (req: Req, res: Res) => userController.signInUser(req, res));


// ********************************************| ADD NEW PASSWORD *******************************************************************************************************************************************************************|
router.post('/add_password', (req: Req, res: Res) => userController.addnewPassword(req, res));


// ********************************************| GOOGLE AUTH CHECK AND LOGIN *******************************************************************************************************************************************************************|
router.post('/google', (req: Req, res: Res) => userController.googleAuth(req, res));














export default router;
