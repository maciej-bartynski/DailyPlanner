import {iBoard} from 'lib/models/board';
import {useEffect, useCallback} from 'react';
import apiGetBoards from 'api/boards/getBoards';
import apiUpdateBoard from 'api/boards/updateBoard';
import apiDeleteBoard from 'api/boards/deleteBoard';
import apiCreateBoard from 'api/boards/createBoard';
import apiGetBoardById from 'api/boards/getBoardById';
import {
  RootState,
  useAppSelector,
  useAppDispatch,
} from 'lib/storageRedux/storageRedux.store';
import {eBoardsActions} from 'lib/storageRedux/actions/boards/types';

const selectorGetBoardsState = (state: RootState) => state.boards;

const useBoards = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector(selectorGetBoardsState);

  const createBoard = useCallback(
    async (fields: Omit<iBoard, 'id'>) => {
      dispatch({type: eBoardsActions.BOARDS_LOADING, payload: {loading: true}});
      const {
        severity: creationSeverity,
        message: creationMessage,
        data: boardId,
      } = await apiCreateBoard(fields);

      if (!boardId) {
        dispatch({
          type: eBoardsActions.BOARDS_ISSUE,
          payload: {
            severity: creationSeverity,
            message: creationMessage,
          },
        });
      } else {
        const {
          severity: getBoardSeverity,
          message: getBoardMessage,
          data: board,
        } = await apiGetBoardById(boardId);

        if (board) {
          dispatch({
            type: eBoardsActions.BOARD_CREATE,
            payload: {
              severity: getBoardSeverity,
              message: getBoardMessage,
              board: board,
            },
          });
        } else {
          dispatch({
            type: eBoardsActions.BOARDS_ISSUE,
            payload: {
              severity: getBoardSeverity,
              message: getBoardMessage,
            },
          });
        }
      }
    },
    [dispatch],
  );

  const deleteBoard = useCallback(
    async (id: string) => {
      dispatch({type: eBoardsActions.BOARDS_LOADING, payload: {loading: true}});
      const {severity, message} = await apiDeleteBoard(id);
      dispatch({
        type: eBoardsActions.BOARD_DELETE,
        payload: {
          severity,
          message,
          id: id,
        },
      });
    },
    [dispatch],
  );

  const updateBoard = useCallback(
    async (id: string, fields: Omit<iBoard, 'id'>) => {
      dispatch({type: eBoardsActions.BOARDS_LOADING, payload: {loading: true}});
      const {severity, message} = await apiUpdateBoard(id, fields);
      dispatch({
        type: eBoardsActions.BOARD_UPDATE,
        payload: {
          severity,
          message,
          id,
          fields,
        },
      });
    },
    [dispatch],
  );

  const getBoard = useCallback(
    (id: string): iBoard | null => {
      const entry = Object.entries(boards.data.boards || {}).find(
        taskEntry => taskEntry[0] === id,
      );
      return entry ? entry[1] : null;
    },
    [boards.data.boards],
  );

  const loadAllBoardsFromStorage = useCallback(async () => {
    dispatch({type: eBoardsActions.BOARDS_LOADING, payload: {loading: true}});
    const {severity, message, data: allBoards} = await apiGetBoards();
    dispatch({
      type: eBoardsActions.BOARDS_INIT,
      payload: {
        severity,
        message,
        boards: allBoards || {},
      },
    });
  }, [dispatch]);

  useEffect(() => {
    if (!boards.wasDataFetchAttempt) {
      loadAllBoardsFromStorage();
    }
  }, [loadAllBoardsFromStorage, boards.wasDataFetchAttempt]);

  return {
    severity: boards.severity,
    message: boards.message,
    loading: boards.loading,
    data: boards.data,
    wasDataFetchAttempt: boards.wasDataFetchAttempt,
    methods: {
      createBoard,
      deleteBoard,
      updateBoard,
      getBoard,
      loadAllBoardsFromStorage,
    },
  };
};

export default useBoards;
