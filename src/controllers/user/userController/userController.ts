import { Req, Res } from '../../../type/user/express';
import { passwordBcrypt } from '../../../services/userService/passwordBcrypt';
import { IUser } from '../../../type/user/User';
import UserModel from '../../../models/user/UserModel';

class UserController {

    public async createUser(req: Req, res: Res): Promise<void | Res> {

        try{
            console.log("inside create user function");

           const { email, password, phone, address, state, city, pincode} = req.body;
           const hashPassword: string = await passwordBcrypt(password);
            
            const userData: IUser = {
                email: email,
                phone: phone,
                password: hashPassword,
                address: address,
                state: state,
                city: city,
                pincode: pincode
              }
            
              const savedUser  = await UserModel.create(userData);

              res.status(200).json({message: "sucessfully save", data: savedUser});
           
        }catch (err) {
            if (err instanceof Error) {
                console.error('Error creating user:', err.message);
                return res.status(500).json({ message: err.message });
            } else {
                console.error('Unknown error creating user');
                return res.status(500).json({ message: 'An unknown error occurred' });
            }
        }
    }
}
export default UserController;