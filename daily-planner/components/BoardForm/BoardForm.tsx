import React, {useCallback, useRef} from 'react';
import {
  BoardFormInitialValues,
  boardFormValidation,
  boardFormWarningManager,
} from './config';
import {Form} from 'lib/uniform';
import useBoards from 'lib/hooks/useBoards';
import {iBoardFormCreate} from 'lib/models/board';
import BoardFormBody from 'atomic/organisms/BoardFormBody';

type Props = {
  boardId?: string;
};

const BoardForm: React.FC<Props> = ({boardId}) => {
  const {methods} = useBoards();
  const {updateBoard, getBoard, createBoard} = methods;
  const currentBoard = boardId ? getBoard(boardId) : null;
  const initialValues = useRef(
    Object.assign({}, BoardFormInitialValues),
  ).current;

  if (currentBoard) {
    initialValues.title = currentBoard.title;
    initialValues.description = currentBoard.description;
    initialValues.tasks = currentBoard.tasks;
  }

  const onSubmit = useCallback(
    (values: iBoardFormCreate) => {
      if (currentBoard && boardId) {
        updateBoard(boardId, values);
      } else {
        createBoard(values);
      }
    },
    [updateBoard, createBoard, currentBoard, boardId],
  );

  return (
    <Form
      initialValues={initialValues}
      onSubmit={onSubmit}
      validation={boardFormValidation}
      warning={boardFormWarningManager}>
      <BoardFormBody boardId={boardId} />
    </Form>
  );
};

export default BoardForm;
