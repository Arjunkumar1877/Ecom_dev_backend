import bcrypt from 'bcrypt';



class Bcrypt {

    public async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds)
        return hashedPassword;
    }

    public async comparePassword(password: string, hashedPassword: string): Promise<boolean> {
        const passwordMatch = await bcrypt.compare(password, hashedPassword);
        return passwordMatch;
    };

}

export const bcryptFun = new Bcrypt

