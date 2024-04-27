import { Router } from 'express'
import UsuarioController from './src/usuarios/usuario.controller'

const routes = Router()
 routes.get('/health-check')
 routes.post('/usuarios', UsuarioController.create)
 routes.get('/usuarios/:id', UsuarioController.findById)
 routes.get('/usuarios/', UsuarioController.find)
 routes.put('/usuarios/:id', UsuarioController.update)
 routes.delete('/usuarios/:id', UsuarioController.delete)

export {
    routes
}