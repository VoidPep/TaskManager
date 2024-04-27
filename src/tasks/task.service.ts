import { Status } from "../enums/status.enum";
import TaskSchema from "./task.schema";

class TaskService {
    async findByCreationDate() {
        return TaskSchema.findOne().sort({ createdAt: 1 })
    }

    async create(task: any) {
        return TaskSchema.create(task);
    }

    async findById(id: string) {
        return TaskSchema.findOne({id: id})
    }

    async findAll(groupByCategoria = false) {
        const tasks = await TaskSchema.find()
        
        if(!groupByCategoria)
            return tasks
        
        let group:any = {}

        tasks.forEach(q => {
            group[`${q.categoria_id}`] = q.titulo
        })

        return group
    }

    async update(id: string, task: any) {
        return TaskSchema.findOneAndUpdate({id: id}, task, {new: true})
    }

    async delete(id: string) {
        await TaskSchema.findOneAndDelete({id: id})
        return 'Task Removido com Sucesso'
    }

    async getMediaDeConclusao() {
        const tarefasConcluidas = await TaskSchema.find({ status: Status.CONCLUIDA })
        
        return tarefasConcluidas.length
    }

    async findByDescription() {
        return TaskSchema.find().sort("-descricao").limit(1)
    }
}

export default new TaskService()