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
        const groupByCategoria = req.params?.groupByCategoria ? true : false

        const tasks = await TaskService.findAll(groupByCategoria)
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

    //Rota para calcular a média de conclusão das tarefas.
    async getMediaDeConclusao(req: Request, res: Response) {
        const mediaDeConclusao = await TaskService.getMediaDeConclusao()
        return res.json({media_conclusao: mediaDeConclusao})
    }
    
    //Rota para encontrar a tarefa com a descrição mais longa.
    async findByDescription(req: Request, res: Response) {
        const taskFound = await TaskService.findByDescription()

        return res.json({task_encontrada: taskFound[0]});
    }

    //Rota para encontrar a tarefa mais antiga de um usuário.
    async findByCreationDate(req: Request, res: Response) {
        const taskFound = await TaskService.findByCreationDate()

        return res.json({task_encontrada: taskFound[0]});
    }
}

export default new TaskController()