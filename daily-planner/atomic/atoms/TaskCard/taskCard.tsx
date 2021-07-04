import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import useTasks from 'lib/storageAccess/tasks';
import {navigation} from 'lib/navigation';
import {eColors} from 'lib/styles/colors';
import {mixins} from 'lib/styles/fonts';

type Props = {
  name: string;
  description?: string;
  duration?: string;
  taskId: string;
};

export const TaskCard: React.FC<Props> = props => {
  const {name, description, duration, taskId} = props;

  const {methods} = useTasks();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{name}</Text>
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      <Text style={styles.duration}>{duration}</Text>
      <View style={styles.actions}>
        <Button
          title="Edit"
          onPress={() => navigation.openCreateTask(taskId)}
        />
        <Button
          title="Delete"
          onPress={() => {
            methods.deleteTask(taskId);
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderColor: eColors.secondaryDark,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 20,
    alignItems: 'center',
  },
  name: {
    ...mixins.subtitle,
    marginBottom: 10,
  },
  description: {
    ...mixins.paragraph,
    marginBottom: 10,
  },
  duration: {
    ...mixins.paragraph,
    marginBottom: 20,
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    width: '100%',
  },
});
