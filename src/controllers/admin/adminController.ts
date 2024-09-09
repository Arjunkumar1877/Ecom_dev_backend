import { AdminModel } from "../../models/admin/adminModel";
import { bcryptFun } from "../../services/userService/passwordBcrypt";
import { IAdmin, IAdminDb } from "../../type/user/Admin";
import { Req, Res } from "../../type/user/express";

class AdminController {
  public async adminLogin(req: Req, res: Res): Promise<void> {
    try {
      const adminData: IAdmin | null = await AdminModel.findOne({
        email: req.body.email,
      });

      if (adminData) {
        const password: boolean = await bcryptFun.comparePassword(
          req.body.password,
          adminData.password
        );

        if (password) {
          res
            .status(200)
            .json({ message: "Login successfull", data: adminData });
        } else {
          res.status(400).json({ message: "Invalid credentail", data: null });
        }
      } else {
        res.status(400).json({ message: "Invalid credential", data: null });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.messaage, data: null });
    }
  }
}

export const adminController = new AdminController();
