import { Request, Response } from 'express'
import usuarioService from './usuario.service'

class UsuarioController {

    async create(req: Request, res: Response) {
        const usuario = await usuarioService.create(req.body)
        res.status(201)
        return res.json(usuario)
    }

    async findById(req: Request, res: Response) {
        const usuario = await usuarioService.findById(req.params.id)
        return res.json(usuario)
    }

    async find(req: Request, res: Response) {
        const usuarios = await usuarioService.findAll()
        return res.json(usuarios)
    }

    async update(req: Request, res: Response) {
        const updatedUsuario = await usuarioService.update(req.params.id, req.body)
        return res.json(updatedUsuario)
    }

    async delete(req: Request, res: Response) {
        const deleteReturn = await usuarioService.delete(req.params.id)
        return res.json(deleteReturn)
    }

}

export default new UsuarioController()