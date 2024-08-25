import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import { userSignupService } from '../../../services/userService/userSignupService';

export const createUser = async (req: Request, res: Response): Promise<void | Response> => {

    try {
        console.log("inside create user function")
        //validate request
        const errors = validationResult(req);
        console.log(errors, "this is the errors")
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const user = await userSignupService(req.body);
        return res.status(201).json(user);

    } catch (err) {
        if (err instanceof Error) {
            console.error('Error creating user:', err.message);
            return res.status(500).json({ message: err.message });
        } else {
            console.error('Unknown error creating user');
            return res.status(500).json({ message: 'An unknown error occurred' });
        }
    }
};
