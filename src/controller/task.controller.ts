import Task from '../model/task.model';
import { Request, Response } from 'express';

export default class TaskController {

  public async getAllTasks(req: Request, res: Response) {
    try {
      const tasks = await Task.findAll();
      res.status(200).json(tasks);
    } catch (e) {
      res.status(400).json('Error! Bad Request');
    }
  }

  public async getTask(req: Request, res: Response) {
    try {
      const task = await Task.findOne({ where: { id: req.params.id } });
      res.status(200).json(task);
    } catch (e) {
      res.status(400).json('Error! Bad Request');
    }
  }

  public async createTask(req: Request, res: Response) {
    try {
      const newTask = await Task.create({
        title: req.body.title,
        description: req.body.description,
        author_id: req.body.author_id
      });
      res.status(200).json(newTask);
    } catch (e) {
      res.status(400).json('Error! Bad Request');
    }
  }

  public async updateTask(req: Request, res: Response) {
    try {
      const updatedTask = await Task.update({
          title: req.body.title,
          description: req.body.description,
          author_id: req.body.author_id
        },
        {
          where: {
            id: req.params.id
          }
        });
      res.status(200).json('Task has been updated');
    } catch (e) {
      res.status(400).json('Error! Bad Request');
    }
  }

  public async deleteTask(req: Request, res: Response) {
    try {
      const deletedTask = await Task.destroy({ where: { id: req.params.id } });
      res.status(200).json('Task has been deleted');
    } catch (e) {
      res.status(400).json('Error! Bad Request');
    }
  }
}
