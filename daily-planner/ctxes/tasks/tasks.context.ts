import {createContext} from 'react';
import {iTaskContext} from './_types';

const TaskContext = createContext<iTaskContext>({
  state: {
    tasks: [],
  },
  addTask: () => {},
  removeTask: (id: number) => {
    console.log(id);
  },
});

export default TaskContext;
