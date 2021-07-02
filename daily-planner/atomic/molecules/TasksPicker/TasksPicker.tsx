import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {iTask} from 'lib/models/task';

type Props = {
  cancelCallback: () => void;
  tasks: iTask[];
  addTaskToBoard: (taskId: string) => void;
};

const TasksPicker: React.FC<Props> = ({
  cancelCallback,
  tasks,
  addTaskToBoard,
}) => {
  return (
    <View style={styles.tasksPicker}>
      <View>
        <Button
          title="x"
          onPress={() => {
            cancelCallback();
          }}
        />
      </View>
      {tasks.map(task => (
        <Button
          title={task.name}
          onPress={() => {
            addTaskToBoard(task.id);
          }}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tasksPicker: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
});

export default TasksPicker;
