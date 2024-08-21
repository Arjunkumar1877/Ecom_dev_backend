import { Request, Response } from 'express'
import { CreateUser } from '../../application/useCases/CreateUser'

export class UserController {
  constructor(private createUser: CreateUser) {}

  async create(req: Request, res: Response): Promise<void> {
    const { name, email, password } = req.body
    const user = await this.createUser.execute(name, email, password)
    res.json(user)
  }
}
