import {iTask} from 'lib/models/task';
import {iBoard} from 'lib/models/board';

/**
 * { tasks }
 */
export enum eTasksActions {
  TASK_CREATE = 'TASK_CREATE',
  TASK_DELETE = 'TASK_DELETE',
  TASK_UPDATE = 'TASK_UPDATE',
  TASKS_INIT = 'TASKS_INIT',
}

export interface iTasksState {
  tasks: {
    [id: string]: iTask;
  };
  current: iTask | null;
  total: number;
  active: number;
}

export enum eTasksReducers {
  TASK_CREATE = 'reducerCreateTask',
  TASK_UPDATE = 'reducerUpdateTask',
  TASK_DELETE = 'reducerDeleteTask',
  TASKS_INIT = 'reducerInitTasks',
}

/**
 * { boards }
 */

export interface iBoardsState {
  boards: {
    [id: string]: iBoard;
  };
  current: iBoard | null;
  total: number;
  active: number;
}

export enum eBoardsActions {
  BOARD_CREATE = 'BOARD_CREATE',
  BOARD_DELETE = 'BOARD_DELETE',
  BOARD_UPDATE = 'BOARD_UPDATE',
  BOARDS_INIT = 'BOARDS_INIT',
}

export enum eBoardsReducers {
  BOARD_CREATE = 'reducerCreateBoard',
  BOARD_UPDATE = 'reducerUpdateBoard',
  BOARD_DELETE = 'reducerDeleteBoard',
  BOARDS_INIT = 'reducerInitBoards',
}
