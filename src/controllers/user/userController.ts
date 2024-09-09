import { Req, Res } from "../../type/user/express";
import { bcryptFun } from "../../services/userService/passwordBcrypt";
import { IUser, IUserDb } from "../../type/user/User";
import UserModel from "../../models/user/userModel";
import otpGenerator from "otp-generator";
import { SendEmailOtp } from "../../services/userService/nodeMailer";
import { Document } from "mongoose";

class UserController {
  public async createUser(req: Req, res: Res): Promise<void | Res> {
    try {
      console.log("inside create user function");
      console.log("Signup controller ❤️❤️❤️❤️❤️❤️");
      const { email, password, phone, address, state, city, pincode, name } =
        req.body;
      const hashPassword: string = await bcryptFun.hashPassword(password);

      const userData: IUser = {
        name: name,
        email: email,
        phone: phone,
        password: hashPassword,
        address: address,
        state: state,
        city: city,
        pincode: pincode,
      };

      const savedUser: IUserDb = await UserModel.create(userData);

      res.status(200).json({ message: "sucessfully save", data: savedUser });
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error creating user:", err.message);
        return res.status(500).json({ message: err.message, data: null });
      } else {
        console.error("Unknown error creating user");
        return res.status(500).json({ message: "An unknown error occurred" , data: null});
      }
    }
  }

  public async signInUser(req: Req, res: Res): Promise<void> {
    try {
      const userData: IUserDb | null = await UserModel.findOne({
        email: req.body.email,
      });
      if (userData) {
        if (userData.verified) {
          const match = await bcryptFun.comparePassword(req.body.password, userData.password);

          if (match) {
            res.status(200)
            .cookie('token', req.body.token, { httpOnly: true, secure: true }) 
            .json({
              message: "successfully login",
              data: null
            });
          
          } else {
            res.status(400).json({ message: "Invalid password", data: null });
          }
        } else {
          res.status(400).json({ message: "Please verify your email", data: null });
        }
      } else {
        res.status(404).json({ message: "User does not exist", data: null });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message, data: null });
    }
  }

  public async sendEmail(req: Req, res: Res): Promise<void> {
    try {
      const OTP: string = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
        digits: true,
      });
      console.log(OTP);
      const SaveData: IUser | null = await UserModel.findOneAndUpdate(
        { email: req.body.email },
        {
          $set: {
            otp: OTP,
          },
        },
        { new: true }
      );

      if (SaveData) {
        const EmailOtpSend: { success: boolean } = await SendEmailOtp(
          req.body.email,
          OTP
        );
        if (EmailOtpSend.success) {
          res.status(200).json({ message: "The email was sent successfully", data: null });
        } else {
          res
            .status(200)
            .json({
              message:
                "There is  an issue on sending email please try again later",
                data: null
            });
        }
      }
    } catch (error: any) {
      res.status(500).json({ messaage: error.messaage, data: null });
    }
  }

  public async verifyOtp(req: Req, res: Res): Promise<void> {
    try {
      const userData: IUserDb | null = await UserModel.findOne({
        email: req.body.email,
      });

      if (userData) {
        if (userData.otp === req.body.otp) {
          userData.verified = true;
          const savedUserData = await (userData as Document).save();

          if (savedUserData) {
            res.status(200).json({ message: "OTP verified successfully", data: null });
          } else {
            res
              .status(500)
              .json({
                message: "There was an issue verifying the OTP in the database",
              });
          }
        } else {
          res.status(400).json({ message: "Invalid OTP", data: null });
        }
      } else {
        res.status(404).json({ message: "User does not exist", data: null });
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message });
    }
  }

  public async addnewPassword(req: Req, res: Res): Promise<void>{
    try {
      const { password, email}: { password: string; email: string} = req.body;

      const updatedData: IUser | null = await UserModel.findOneAndUpdate({email: email}, {
        $set: {
          password: password
        }
      },{ new: true });


      if(updatedData){
        res.status(200).json({message: "New Password added succsfully", data: updatedData});
      }else{
        res.status(400).json({message: "Password Adding unsucessfull", data: null});
      }
    } catch (error: any) {
      res.status(500).json({ messaage: error.messaage , data: null});
    }
  }

  public async  googleAuth(req: Req, res: Res): Promise<void>{
   try{

    console.log("gooogle auth 📀📀📀📀🔥🔥🔥🔥💕💕💕")
    const str = 'abcdefghijklmnopq';
    let password = "";
    for(let i = 0; i < 8; i++){
       password += str[Math.floor(Math.random() * i) % str.length]
    }
    const ecnryptedPassword: string = await bcryptFun.hashPassword(password)

    const exsistinguser = await UserModel.findOne({email: req.body.email});
    if(exsistinguser){
      res.status(200).json({message: "success", data: exsistinguser});
    }else{
      const newData: { name: string; email: string; password: string; image: string} = {
        name: req.body.name,
        email: req.body.email,
        password: ecnryptedPassword,
        image: req.body.googlePhotoUrl
      }

      const createduser  = await UserModel.create(newData);

      if(createduser){
        res.status(200).json({message: "success", data: createduser});
      }else{
        res.status(400).json({message: "Error creating user", data: null});
      }

    }


   }catch(error: any){
    res.status(500).json({message: error.messaage, data: null})
   }
  }

}
export const userController = new UserController();
