import { IUserSignupUseCase } from "../../entities/useCaseInterfaces/IUserSignupUseCase";
import express, { Application, Request, Response, NextFunction } from "express";

export class UserSignupController{
  constructor(private iusersignupuseCase: IUserSignupUseCase){};

  async SignupUserControl(req: Request, res: Response): Promise<void>{
    try {
        const data = await this.iusersignupuseCase.SignupUser(req.body);
        res.status(200).json(data);
    } catch (error) {
        console.log(error)
    }
  }
}