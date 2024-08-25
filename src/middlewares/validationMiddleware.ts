import { check } from 'express-validator';

export const validateUserSignup = [
    check('email').isEmail().withMessage('Enter a valid Email'),
    check('password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
];