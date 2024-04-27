import TaskService from "./task.service";
import {Request, Response} from "express"

class TaskController {

    async create(req: Request, res: Response) {
        const task = await TaskService.create(req.body)
        res.status(201)
        return res.json(task)
    }

    async findById(req: Request, res: Response) {
        const task = await TaskService.findById(req.params.id)
        return res.json(task)
    }

    async find(req: Request, res: Response) {
        const tasks = await TaskService.findAll()
        return res.json(tasks)
    }

    async update(req: Request, res: Response) {
        const updatedTask = await TaskService.update(req.params.id, req.body)
        return res.json(updatedTask)
    }

    async delete(req: Request, res: Response) {
        const deleteReturn = await TaskService.delete(req.params.id)
        return res.json(deleteReturn)
    }
}

export default new TaskController()