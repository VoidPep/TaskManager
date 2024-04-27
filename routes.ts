import {Router} from 'express'
import UsuarioController from './src/usuarios/usuario.controller'
import TaskController from './src/tasks/task.controller'
import CategoriaController from './src/categorias/categoria.controller'

const routes = Router()
routes.post('/usuarios', UsuarioController.create)
routes.get('/usuarios/:id', UsuarioController.findById)
routes.get('/usuarios/', UsuarioController.find)
routes.put('/usuarios/:id', UsuarioController.update)
routes.delete('/usuarios/:id', UsuarioController.delete)

routes.post('/tasks', TaskController.create)
routes.get('/tasks/:id', TaskController.findById)
routes.get('/tasks/', TaskController.find)
routes.put('/tasks/:id', TaskController.update)
routes.delete('/tasks/:id', TaskController.delete)

routes.post('/categorias', CategoriaController.create)
routes.get('/categorias/:id', CategoriaController.findById)
routes.get('/categorias/', CategoriaController.find)
routes.put('/categorias/:id', CategoriaController.update)
routes.delete('/categorias/:id', CategoriaController.delete)

export {
    routes
}