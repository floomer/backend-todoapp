import Task from '../model/task.model';
import { Request, Response } from 'express';

export default class TaskController {

  public async getAllTasks(req: Request, res: Response) {
    try {
      const tasks = await Task.findAll();
      res.status(200).json(tasks);
    } catch (e) {
      res.status(404).json('Error occurred!');
    }
  }

  public async getTask(req: Request, res: Response) {
    try {
      const task = await Task.findOne({ where: { id: req.params.id } });
      res.status(200).json(task);
    } catch (e) {
      res.status(404).json('Error occurred!');
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
      res.status(404).json('Error occurred!');
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
      res.status(200).json(updatedTask);
    } catch (e) {
      res.status(404).json('Error occurred!');
    }
  }

  public async deleteTask(req: Request, res: Response) {
    try {
      const deletedTask = await Task.destroy({ where: { id: req.params.id } });
      res.status(200).json(deletedTask);
    } catch (e) {
      res.status(404).json('Error occurred!');
    }
  }
}
