import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export const generateJwt = (req: Request, res: Response, next: NextFunction): void => {
    try {

        const { email } = req.body;

        // Generate JWT
        const token = jwt.sign(
            { email },                          // Payload
            process.env.JWT_SECRET as string,           // Secret key
            { expiresIn: '600m' }                         // Token expiration time
        );


        req.body.token = token;


        next();
    } catch (error) {
        res.status(500).json({ message: "Failed to generate token" });
    }
};


export const verifyJwt = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const token = req.cookies.access_token;

        if (!token) {
            return next(new Error("Unauthorized"))
        }
        jwt.verify(token, process.env.JWT_SECRET as string, (err: any, user: any) => {
            if (err) {
                return next(new Error("Unauthorized"))
            }

            req.body.user = user;

        })
        next();
    } catch (error) {
        res.status(500).json({ message: "Failed to verify token" });
    }
}

export const removeJwt = (res: Response): void => {
    try {
        res.clearCookie("access_token");
        res.status(200).json({ message: "Token removed" });

    } catch (error) {
        res.status(500).json({ message: "Failed to remove token" });
    }
}