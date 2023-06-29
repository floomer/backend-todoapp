import { Router } from 'express';
import TaskController from '../controller/task.controller';

const taskRouter = Router();
const taskController = new TaskController();

taskRouter.get('/tasks', taskController.getAllTasks);
taskRouter.get('/tasks/:id', taskController.getTask);
taskRouter.post('/tasks', taskController.createTask);
taskRouter.put('/tasks/:id', taskController.updateTask);
taskRouter.delete('/tasks/:id', taskController.deleteTask);
export default taskRouter;
