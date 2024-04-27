import TaskSchema from "./task.schema";

class TaskService {
    async create(task: any){
        return TaskSchema.create(task);
    }
    
    
}

export default new TaskService()