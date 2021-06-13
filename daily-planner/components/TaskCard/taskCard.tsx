import React, {useState, useCallback} from 'react';
import {View, Text, Button} from 'react-native';
import {iTask} from 'components/../ctxes/tasks/_types';
import styles from './taskCard.styles';

const TaskCard: React.FC<
  iTask & {
    removeTask: (id: number) => void;
  }
> = ({removeTask, title, content, length, id}) => {
  const onPressHandler = useCallback(() => {
    removeTask(id);
  }, [removeTask, id]);

  console.log(id);
  return (
    <View style={styles.root}>
      <Text style={styles.title}>
        {title}:{'' + id}
      </Text>
      <Text style={styles.content}>{content}</Text>
      <Text style={styles.content}>{'' + length}</Text>
      <Button
        testID="stateButton"
        title="Remove this task"
        onPress={onPressHandler}
      />
    </View>
  );
};

export default TaskCard;
