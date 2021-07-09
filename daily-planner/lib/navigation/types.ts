import { eViews, eModals, eScreens } from "lib/enums/screens";

export type MainStackParamList = {
  [eScreens.Modals]: undefined;
  [eScreens.Views]: undefined;
};

export type ModalsStackParamList = {
  [eModals.ModalCreateTask]: { taskId?: string };
  [eModals.ModalCreateBoard]: { boardId?: string };
  [eModals.ModalAddTasks]: { boardId?: string };
};

export type ViewsStackParamList = {
  [eViews.Tasks]: undefined;
  [eViews.Boards]: undefined;
};

export interface iViewsNavigation {
  navigateTask: () => void
}

export interface iModalNavigation {
  openModalCreateTask: (taskId?: string) => void,
  openModalCreateBoard: (boardId?: string) => void,
  openModalAddTasks: (boardId: string) => void,
}