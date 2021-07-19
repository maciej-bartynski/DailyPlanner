import { tasksStorage } from "lib/storageAccess/tasks/useTasks"
import { iTask } from "lib/models/task";

const getTaskById = async () => {
    const tasks = await tasksStorage.getAll<iTask>();
    return {
        tasks,
        message: tasks && Object.keys(tasks).length && '',
        success: !!Object.keys(tasks || {}).length
    };
}

export default getTaskById;