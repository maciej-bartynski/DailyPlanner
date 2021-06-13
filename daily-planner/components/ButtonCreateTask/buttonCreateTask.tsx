import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './buttonCreateTask.style';
import useTasks from '../../ctxes/tasks/tasks.hook';

const ButtonCreateTask = () => {
  const taskContext = useTasks();
  const {state, addTask, removeTask} = taskContext;
  const {tasks} = state;

  return (
    <TouchableOpacity onPress={addTask} style={styles.root}>
      <Text style={styles.icon}>+</Text>
    </TouchableOpacity>
  );
};

export default ButtonCreateTask;
