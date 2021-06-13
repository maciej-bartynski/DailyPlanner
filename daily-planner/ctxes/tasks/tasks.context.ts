import {createContext} from 'react';
import {iTaskContext, iTask} from './_types';

const TaskContext = createContext<iTaskContext>({
  state: {
    tasks: [],
  },
  addTask: () => {},
  removeTask: (id: number) => {},
});

export default TaskContext;
