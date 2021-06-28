import navigationRef from './reference';
interface iArgs {
  path: string;
  params?: object;
}

const navigate = ({path, params}: iArgs): string => {
  if (navigationRef.current) {
    navigationRef.current.navigate(path, params);
    return '';
  } else {
    return 'Navigation not mounted.';
  }
};

export default navigate;

export const navigation = {
  navigateTask: () => {
    navigate({path: 'Tasks', params: {title: 'Task'}});
  },

  openCreateTask(taskId?: string) {
    navigate({
      path: 'Modals',
      params: {screen: 'ModalCreateTask', params: {taskId}},
    });
  },

  openCreateBoard: (boardId?: string) => {
    navigate({
      path: 'Modals',
      params: {screen: 'ModalCreateBoard', params: {boardId}},
    });
  },
};
