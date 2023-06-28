import { Request, Response, Router } from 'express';
import User from '../model/user.model';
import { UserController } from '../controller/user.controller';

const UserRouter = Router();
const userController = new UserController();

UserRouter.get('/users', userController.getAllUsers);
UserRouter.get('/users/:id', userController.getUser);
UserRouter.post('/users', userController.createUser);
UserRouter.put('/users/:id', userController.updateUser);
UserRouter.delete('/users/:id', userController.deleteUser);
export default UserRouter;