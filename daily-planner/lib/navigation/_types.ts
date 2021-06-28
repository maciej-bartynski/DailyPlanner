export type MainStackParamList = {
  Modals: undefined;
  Views: undefined;
};

export type ModalsStackParamList = {
  ModalCreateTask: {taskId?: string};
  ModalCreateBoard: {boardId?: string};
};

export type ViewsStackParamList = {
  Dashboard: {title: string};
  Tasks: undefined;
  Boards: undefined;
};
