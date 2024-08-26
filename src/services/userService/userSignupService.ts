import bcrypt from 'bcrypt';
import UserModel from '../../models/user/UserModel'
import { IUser } from '../../type/user/User';
import { hasUncaughtExceptionCaptureCallback } from 'process';

export const userSignupService = async (userData: Partial<IUser>): Promise<IUser> => {
    if (userData.password) {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(userData.password, saltRounds);
        userData.password = hashedPassword;
    }
    const user = new UserModel(userData);
    await user.save();
    console.log(user)
    return user;
}