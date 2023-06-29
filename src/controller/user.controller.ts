import User from '../model/user.model';
import { Request, Response } from 'express';

export class UserController {
  public async getAllUsers(req: Request, res: Response) {
    try {
      const result = await User.findAll();
      res.status(200).json(result);
    } catch (e) {
      res.status(400).json('Error! Bad Request');
    }
  }

  public async getUser(req: Request, res: Response) {
    try {
      const user = await User.findOne({ where: { id: req.params.id } });
      res.status(200).json(user);
    } catch (e) {
      res.status(400).json('Error! Bad Request');
    }
  }

  public async createUser(req: Request, res: Response) {
    try {
      const newUser = await User.create({ name: req.body.name });
      res.status(200).json(newUser);
    } catch (e) {
      res.status(400).json('Error! Bad Request');
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
      res.status(200).json('User has been updated');
    } catch (e) {
      res.status(400).json('Error! Bad Request');
    }
  }

  public async deleteUser(req: Request, res: Response) {
    try {
      const deletedUser = await User.destroy({ where: { id: req.params.id } });
      res.status(200).json('User has been deleted');
    } catch (e) {
      res.status(400).json('Error! Bad Request');
    }
  }
}