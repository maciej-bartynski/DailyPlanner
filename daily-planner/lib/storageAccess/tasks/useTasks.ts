import { useDispatch, useSelector } from "react-redux"
import { iTasksState } from "lib/storageRedux/storageRedux.types";
import { RootState } from "lib/storageRedux/storageRedux.store";
import Storage from "lib/storageLocal/storage";
import { iTask } from "lib/models/task";
import { actionCreatorTaskCreate, actionCreatorTaskDelete, actionCreatorTaskUpdate } from "lib/storageRedux/actions/tasks";
import { useReducer, useMemo } from "react";
import { hookReducer, hookStateInitial } from "./useTasks.reducer"

const tasksStorage = new Storage("TASKS");

const useTasks = () => {
    const [hookState, dispatchHookAction] = useReducer(hookReducer, hookStateInitial);
    const dispatch = useDispatch();
    const tasks = useSelector((state: RootState) => state.tasks);

    const createTask = async (fields: Omit<iTask, "id">) => {
        dispatchHookAction({ type: "LOADING" });
        const [err, key] = await tasksStorage.setItem(fields);

        if (err || !key) dispatchHookAction({ type: "ERROR", error: err || "Failure" });
        else {
            dispatch(actionCreatorTaskCreate({
                id: key,
                ...fields,
            }));
            dispatchHookAction({ type: "DATA" });

        }
    }

    const deleteTask = async (id: string) => {
        dispatchHookAction({ type: "LOADING" });
        const [err] = await tasksStorage.delItem(id);
        if (err) dispatchHookAction({ type: "ERROR", error: err || "Failure" });
        else {
            dispatch(actionCreatorTaskDelete(id));
            dispatchHookAction({ type: "DATA" });
        }
    }

    const updateTask = async (id: string, fields: Omit<iTask, "id">) => {
        dispatchHookAction({ type: "LOADING" });
        const [err] = await tasksStorage.patchItem(id, fields);
        if (err) dispatchHookAction({ type: "ERROR", error: err || "Failure" });
        else {
            dispatch(actionCreatorTaskUpdate(id, fields));
            dispatchHookAction({ type: "DATA" });
        }
    }

    return useMemo(() => ({
        ...hookState,
        data: tasks,
        methods: {
            createTask,
            deleteTask,
            updateTask,
        },
    }), [
        dispatch,
        hookState,
        tasks
    ])
}

export default useTasks;