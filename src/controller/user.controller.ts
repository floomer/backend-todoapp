import User from '../model/user.model';
import { Request, Response } from 'express';

export class UserController {
  public async getAllUsers(req: Request, res: Response) {
    try {
      const result = await User.findAll();
      res.status(200).json(result);
    } catch (e) {
      res.status(404).json('Error!');
    }
  }

  public async getUser(req: Request, res: Response) {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });
      res.status(200).json(user);
    } catch (e) {
      res.status(404).json('Error!');
    }
  }

  public async createUser(req: Request, res: Response) {
    try {
      const newUser = await User.create({ name: req.body.name });
      res.status(200).json(newUser);
    } catch (e) {
      res.status(404).json('Error!');
    }
  }

  public async updateUser(req: Request, res: Response) {
    try {
      const updatedUser = await User.update(
        {
          name: req.body.name
        }, {
          where:
            {
              id: req.params.id
            }
        });
      res.status(200).json(updatedUser);
    } catch (e) {
      res.status(404).json('Error!');
    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      const deletedUser = await User.destroy({ where: { id: req.params.id } });
      res.status(200).json(deletedUser);
    } catch (e) {
      res.status(404).json('Error!');
    }
  }
}