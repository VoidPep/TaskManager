import UsuarioModel from './usuario.schema'

class BookService {
    async create(usuario: any) {
        return await UsuarioModel.create(usuario)
    }

    async findById(id: string) {
        return UsuarioModel.findById(id)
    }

    async findAll() {
        return UsuarioModel.find()
    }

    async update(id: string, book: any) {
        return UsuarioModel.findByIdAndUpdate(id, {}, {new: true})
    }

    async delete(id: string) {
        await UsuarioModel.findByIdAndDelete(id)
        return 'Usuário Removido com Sucesso'
    }
}

export default new BookService()

