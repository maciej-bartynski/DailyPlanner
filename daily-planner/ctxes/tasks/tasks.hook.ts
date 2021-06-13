import {useContext, useMemo} from 'react';
import TaskContext from './tasks.context';

const useTasks = () => useContext(TaskContext);

export default useTasks;
