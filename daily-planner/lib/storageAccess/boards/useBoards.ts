import {useDispatch, useSelector} from 'react-redux';
import {RootState} from 'lib/storageRedux/storageRedux.store';
import Storage from 'lib/storageLocal/storage';
import {iBoard} from 'lib/models/board';
import {
  actionCreatorBoardCreate,
  actionCreatorBoardDelete,
  actionCreatorBoardUpdate,
} from 'lib/storageRedux/actions/boards';
import {useReducer, useMemo} from 'react';
import {hookReducer, hookStateInitial} from './useBoards.reducer';
import {iBoardsState} from 'lib/storageRedux/storageRedux.types';

const boardsStorage = new Storage('BOARDS');

const useBoards = () => {
  const [hookState, dispatchHookAction] = useReducer(
    hookReducer,
    hookStateInitial,
  );
  const dispatch = useDispatch();
  const boards = useSelector((state: RootState) => state.boards);

  const createBoard = async (fields: Omit<iBoard, 'id'>) => {
    dispatchHookAction({type: 'LOADING'});
    const [err, key] = await boardsStorage.setItem(fields);

    if (err || !key) {
      dispatchHookAction({type: 'ERROR', error: err || 'Failure'});
    } else {
      dispatch(
        actionCreatorBoardCreate({
          id: key,
          ...fields,
        }),
      );
      dispatchHookAction({type: 'DATA'});
    }
  };

  const deleteBoard = async (id: string) => {
    dispatchHookAction({type: 'LOADING'});
    const [err] = await boardsStorage.delItem(id);
    if (err) {
      dispatchHookAction({type: 'ERROR', error: err || 'Failure'});
    } else {
      dispatch(actionCreatorBoardDelete(id));
      dispatchHookAction({type: 'DATA'});
    }
  };

  const updateBoard = async (id: string, fields: Omit<iBoard, 'id'>) => {
    dispatchHookAction({type: 'LOADING'});
    const [err] = await boardsStorage.patchItem(id, fields);
    if (err) {
      dispatchHookAction({type: 'ERROR', error: err || 'Failure'});
    } else {
      dispatch(actionCreatorBoardUpdate(id, fields));
      dispatchHookAction({type: 'DATA'});
    }
  };

  const addTasksToBoard = async (
    boardId: string,
    task: {taskId: string; from: string; to: string},
  ) => {
    const newTasks = [...boards.boards[boardId]?.tasks, task];
    dispatchHookAction({type: 'LOADING'});
    const [err] = await boardsStorage.patchItem(boardId, {
      tasks: newTasks,
    });
    if (err) {
      dispatchHookAction({type: 'ERROR', error: err || 'Failure'});
    } else {
      dispatch(
        actionCreatorBoardUpdate(boardId, {
          tasks: newTasks,
        }),
      );
      dispatchHookAction({type: 'DATA'});
    }
  };

  const getBoard = (id: string): iBoard | null => {
    const entry = Object.entries(boards.boards).find(
      taskEntry => taskEntry[0] === id,
    );
    return entry ? entry[1] : null;
  };

  return useMemo(
    () => ({
      ...hookState,
      data: boards,
      methods: {
        createBoard,
        deleteBoard,
        updateBoard,
        getBoard,
        addTasksToBoard,
      },
    }),
    [dispatch, hookState, boards],
  );
};

export default useBoards;
