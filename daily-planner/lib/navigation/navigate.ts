import navigationRef from './reference';
import { eModals, eScreens, eViews } from 'lib/enums/screens';
import { iViewsNavigation, iModalNavigation } from './types';

interface iArgs {
  path: string;
  params?: object;
}

const navigate = ({ path, params }: iArgs): string => {
  if (navigationRef.current) {
    navigationRef.current.navigate(path, params);
    return '';
  } else {
    return 'Navigation not mounted.';
  }
};

export const viewsNavigation: iViewsNavigation = {
  navigateTask: () => {
    navigate({ path: eViews.Tasks });
  },
};

export const modalNavigation: iModalNavigation = {
  openModalTaskDetail: (taskId: string) => {
    navigate({
      path: eScreens.Modals,
      params: { screen: eModals.ModalTaskDetail, params: { taskId } },
    });
  },
  openModalCreateTask: (taskId?: string) => {
    navigate({
      path: eScreens.Modals,
      params: { screen: eModals.ModalCreateTask, params: { taskId } },
    });
  },
  openModalCreateBoard: (boardId?: string) => {
    navigate({
      path: eScreens.Modals,
      params: { screen: eModals.ModalCreateBoard, params: { boardId } },
    });
  },
  openModalAddTasks: (boardId: string) => {
    navigate({
      path: eScreens.Modals,
      params: { screen: eModals.ModalAddTasks, params: { boardId } },
    });
  },
};

export default navigate;
