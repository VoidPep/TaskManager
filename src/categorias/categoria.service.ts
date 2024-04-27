import CategoriaSchema from "./categoria.schema"

class CategoriaService {
    async create(task: any) {
        return CategoriaSchema.create(task);
    }

    async findById(id: string) {
        return CategoriaSchema.findOne({id: id})
    }

    async findAll() {
        return CategoriaSchema.find()
    }

    async update(id: string, categoria: any) {
        return CategoriaSchema.findOneAndUpdate({id: id}, categoria, {new: true})
    }

    async delete(id: string) {
        await CategoriaSchema.findOneAndDelete({id: id})
        return 'Usuário Removido com Sucesso'
    }
}

export default new CategoriaService()