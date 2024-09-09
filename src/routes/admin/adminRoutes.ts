import { adminController } from "../../controllers/admin/adminController";
import {  Route } from "../../type/user/express";
import { Router } from "express";
const router: Route = Router();



// ********************************************| ADMIN LOGIN ***********************************************************************************************************************************************************|
router.post('/login', adminController.adminLogin)


export default router;