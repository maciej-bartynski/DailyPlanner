import navigationRef from './reference';
interface iArgs {
  path: string;
  params?: object;
}

const navigate = ({ path, params }: iArgs): string => {
  if (navigationRef.current) {
    console.log("EVEN DEEPER", params)
    navigationRef.current.navigate(path, params);
    return '';
  } else {
    return 'Navigation not mounted.';
  }
};

export default navigate;

export const navigation = {
  navigateDashboard: () => {
    navigate({ path: 'Dashboard', params: { title: 'Dashboard' } });
  },

  navigateTask: () => {
    navigate({ path: 'Tasks', params: { title: 'Task' } });
  },

  openCreateTask(taskId?: string) {
    console.log("t", taskId)
    navigate({ path: 'Modals', params: { screen: "ModalCreateTask", params: { taskId } } })
  },

  navigateDetail: () => {
    navigate({ path: 'Detail', params: { title: 'Detail' } });
  },

  openModal1: () => {
    navigate({ path: 'Modals', params: { screen: 'Modal1', title: 'Modal1' } });
  },

  openModal2: () => {
    navigate({ path: 'Modals', params: { screen: 'Modal2', title: 'Modal2' } });
  },
};
