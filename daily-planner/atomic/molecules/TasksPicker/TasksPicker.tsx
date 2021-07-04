import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {iTask} from 'lib/models/task';
import {eFontSize, eFontWeight, mixins} from 'lib/styles/fonts';
import {ScrollView} from 'react-native-gesture-handler';
import {eColors} from 'lib/styles/colors';

type Props = {
  cancelCallback: () => void;
  tasks: iTask[];
  addTaskToBoard: (taskId: string) => void;
  pressedTime: number;
};

const TasksPicker: React.FC<Props> = ({
  cancelCallback,
  tasks,
  addTaskToBoard,
  pressedTime,
}) => {
  const hours = Math.floor(pressedTime / 60);
  const minutes = Math.floor(pressedTime - 60 * hours);
  return (
    <View style={styles.tasksPicker}>
      <View style={styles.tasksPicker__modal}>
        <View style={styles.tasksPicker__close}>
          <Text style={styles.tasksPicker__title}>Pick task</Text>
          <Text style={styles.tasksPicker__time}>
            {hours}:{minutes}
          </Text>
          <Button title="Close picker" onPress={cancelCallback} />
        </View>
        <ScrollView style={styles.tasksPicker__scroll}>
          {tasks.map(task => (
            <View key={task.id} style={styles.tasksPicker__item}>
              <Text style={styles.tasksPicker__itemLine}>{task.name}</Text>
              <Text style={styles.tasksPicker__itemLine}>
                {task.duration} min.
              </Text>
              <View style={styles.tasksPicker__pickBtn}>
                <Button
                  title="Pick"
                  onPress={() => {
                    addTaskToBoard(task.id);
                    cancelCallback();
                  }}
                />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tasksPicker: {
    position: 'absolute',
    top: 0,
    left: 0,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    height: '100%',
  },
  tasksPicker__modal: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  tasksPicker__close: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingVertical: 5,
  },
  tasksPicker__title: {
    fontSize: eFontSize.subtitle,
    fontWeight: eFontWeight.bold,
    flex: 3,
  },
  tasksPicker__time: {
    ...mixins.headline,
    flex: 2,
  },
  tasksPicker__scroll: {},
  tasksPicker__item: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: eColors.primaryDark,
    borderRadius: 10,
    padding: 10,
  },
  tasksPicker__itemLine: {
    textAlign: 'center',
    ...mixins.label,
  },
  tasksPicker__pickBtn: {
    padding: 10,
  },
});

export default TasksPicker;
