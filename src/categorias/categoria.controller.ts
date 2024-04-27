import CategoriaService from "./categoria.service"
import {Request,Response} from "express"

class CategoriaController {
    async create(req: Request, res: Response) {
        const task = await CategoriaService.create(req.body)
        res.status(201)
        return res.json(task)
    }

    async findById(req: Request, res: Response) {
        const task = await CategoriaService.findById(req.params.id)
        return res.json(task)
    }

    async find(req: Request, res: Response) {
        const tasks = await CategoriaService.findAll()
        return res.json(tasks)
    }

    async update(req: Request, res: Response) {
        const updatedTask = await CategoriaService.update(req.params.id, req.body)
        return res.json(updatedTask)
    }

    async delete(req: Request, res: Response) {
        const deleteReturn = await CategoriaService.delete(req.params.id)
        return res.json(deleteReturn)
    }

}

export default new CategoriaController()