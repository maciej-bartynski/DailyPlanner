import { tasksStorage } from "lib/storageAccess/tasks/useTasks"
import { iTask } from "lib/models/task";

const getTaskById = async (id: string) => {
    const [error,task] = await tasksStorage.getItem<iTask>(id);
    return {
        task,
        message: error,
        success: !!task
    };
}

export default getTaskById;