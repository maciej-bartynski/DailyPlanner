import React, {useState, useMemo} from 'react';
import TaskContext from './tasks.context';
import {iTask} from './_types';

const initialState = {
  tasks: [] as iTask[],
};

const TaskContextProvider: React.FC = ({children}) => {
  const [state, setState] = useState(initialState);

  const addTask = () => {
    setState({
      tasks: [
        ...state.tasks,
        {
          title: `Task no. ${state.tasks.length}`,
          content: 'Task description',
          length: 10000,
          id: Date.now(),
        },
      ],
    });
  };

  const removeTask = (id: number) => {
    setState({
      tasks: state.tasks.filter(item => item.id !== id),
    });
  };
  return (
    <TaskContext.Provider
      value={useMemo(
        () => ({
          state,
          addTask,
          removeTask,
        }),
        [state, setState],
      )}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskContextProvider;
