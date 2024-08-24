import { Request, Response } from 'express';
import User from '../../../models/user/User';

export const createUser = async (req: Request, res: Response) => {
    console.log("inside user create")
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    if (err instanceof Error) {
        res.status(500).json({ message: err.message });
      } else {
        res.status(500).json({ message: 'An unknown error occurred' });
      }
  }
};
