import UsuarioModel from './usuario.schema'

class UsuarioService {
    async create(usuario: any) {
        return await UsuarioModel.create(usuario)
    }

    async findById(id: string) {
        return UsuarioModel.find({id: id});
    }

    async findAll() {
        return UsuarioModel.find()
    }

    async update(id: string, usuario: any) {
        return UsuarioModel.findOneAndUpdate({id: id}, usuario, {new: true})
    }

    async delete(id: string) {
        await UsuarioModel.findOneAndDelete({id: id})
        return 'Usuário Removido com Sucesso'
    }
}

export default new UsuarioService()

