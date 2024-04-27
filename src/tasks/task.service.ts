import TaskSchema from "./task.schema";

class TaskService {
    async create(task: any) {
        return TaskSchema.create(task);
    }

    async findById(id: string) {
        return TaskSchema.findOne({id: id})
    }

    async findAll() {
        return TaskSchema.find()
    }

    async update(id: string, task: any) {
        return TaskSchema.findOneAndUpdate({id: id}, task, {new: true})
    }

    async delete(id: string) {
        await TaskSchema.findOneAndDelete({id: id})
        return 'Task Removido com Sucesso'
    }
}

export default new TaskService()