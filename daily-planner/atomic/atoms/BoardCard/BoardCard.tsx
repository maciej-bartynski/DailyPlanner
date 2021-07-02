import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import useTasks from 'lib/storageAccess/tasks';
import {navigation} from 'lib/navigation';
import {eColors} from 'lib/styles/colors';
import {mixins} from 'lib/styles/fonts';
import useBoards from 'lib/storageAccess/boards';

type Props = {
  title: string;
  description?: string;
  tasksAmount?: string;
  boardId: string;
};

export const BoardCard: React.FC<Props> = ({
  title,
  description,
  tasksAmount,
  boardId,
}) => {
  const {methods} = useBoards();
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{title}</Text>
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      <Text style={styles.duration}>{tasksAmount}</Text>
      <View style={styles.actions}>
        <Button
          title="Edit"
          onPress={() => navigation.openCreateBoard(boardId)}
        />
        <Button
          title="Add tasks to board"
          onPress={() => {
            navigation.openAddTasks(boardId);
          }}
        />
        <Button
          title="Delete"
          onPress={() => {
            methods.deleteBoard(boardId);
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
