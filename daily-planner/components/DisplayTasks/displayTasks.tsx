import React, {useContext} from 'react';
import styles from './displayTasks.style';
import useTasks from './../../ctxes/tasks/tasks.hook';
import {View, Text} from 'react-native';
import TaskCard from 'components/TaskCard';

const DisplayTasks: React.FC = () => {
  const {state, removeTask} = useTasks();

  return (
    <>
      {state.tasks.map(item => {
        return (
          <View style={styles.root} key={item.id}>
            <TaskCard {...item} removeTask={removeTask} />
          </View>;
        );
      })}
    </>;
  );
};

export default DisplayTasks
