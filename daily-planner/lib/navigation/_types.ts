export type MainStackParamList = {
  Modals: undefined;
  Views: undefined;
};

export type ModalsStackParamList = {
  ModalCreateTask: undefined;
  Modal2: {title: string};
  Modal3: {title: string};
};

export type ViewsStackParamList = {
  Dashboard: {title: string};
  Tasks: undefined;
  Detail: {title: string};
};
