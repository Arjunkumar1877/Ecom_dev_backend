import { check, validationResult } from 'express-validator';
import { Request, Response, NextFunction } from 'express';

export const validateUserSignup =  [
    check('email').isEmail().withMessage('Enter a valid Email'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
];


export const handleValidationErrors = (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};