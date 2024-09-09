import { Router } from 'express';
import { validateUserSignup, handleValidationErrors } from '../../middlewares/validationMiddleware';
import { userController } from '../../controllers/user/userController';
import { Req, Res, Route } from '../../type/user/express';
import { generateJwt } from '../../middlewares/jwtService';


const router: Route = Router();



// ********************************************| USER SIGNUP AND SAVING DATA TO DB ***********************************************************************************************************************************************************|
router.post('/signup', validateUserSignup, handleValidationErrors,  userController.createUser);


// ********************************************| SENDING EMAIL OTP AND UPDATING TO DB ************************************************************************************************************************************************************|
router.post('/send_email_otp',  userController.sendEmail);


// ********************************************| VERIFYING THE USER ENTERED OTP ******************************************************************************************************************************************************************|
router.post("/verify_otp",  userController.verifyOtp);


// ********************************************| USER LOGIN AND JWT GENERATION *******************************************************************************************************************************************************************|
router.post('/login', generateJwt,  userController.signInUser);


// ********************************************| ADD NEW PASSWORD *******************************************************************************************************************************************************************|
router.post('/add_password',  userController.addnewPassword);


// ********************************************| GOOGLE AUTH CHECK AND LOGIN *******************************************************************************************************************************************************************|
router.post('/google',  userController.googleAuth);














export default router;
