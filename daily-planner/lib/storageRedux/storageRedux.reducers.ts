import * as taskReducers from "lib/storageRedux/reducers/tasks";
import * as taskActions from "lib/storageRedux/actions/tasks";
import { eTasksReducers, iTasksState } from "./storageRedux.types";
import { Reducer } from "redux";
import { tasksInitialState } from "./reducers/tasks/initialState";

type tAnyTaskAction = ReturnType<typeof taskActions[keyof typeof taskActions]>;
type tAnyTaskReducer = (state: iTasksState, action: tAnyTaskAction) => iTasksState

export const reducerTasks: Reducer<iTasksState, tAnyTaskAction> = (state: iTasksState = tasksInitialState, action: tAnyTaskAction) => {
    const currentReducerName = eTasksReducers[action.type];
    const currentReducer = taskReducers[currentReducerName] as tAnyTaskReducer;
    return typeof currentReducer === "function" 
        ? currentReducer(state, action)
        : state
}