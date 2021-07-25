import { RootState } from "lib/storageRedux/storageRedux.store";

const selectorTasks = (state:RootState) => {
    const { 
        severity, 
        message,
        loading, 
        data
    } = state.tasks;

    const { tasks, total } = data;

    return tasks;
}

export default selectorTasks;