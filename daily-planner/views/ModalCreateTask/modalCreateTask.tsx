import React from 'react';
import PageLayout from 'components/PageLayout';
import { View, Text, Button, useColorScheme, StyleSheet } from 'react-native';
import { ModalsStackParamList } from 'lib/navigation/_types';
import { RouteProp } from '@react-navigation/native';
import ModalBasicTemplate from 'atomic/templates/ModalBasicTemplate';
import useTasks from 'lib/storageAccess/tasks';
import TaskForm from 'components/TaskForm';

type ViewsScreensProps = RouteProp<ModalsStackParamList, 'ModalCreateTask'>;

type ViewProp = {
  route: ViewsScreensProps;
};

const Modal1: React.FC<ViewProp> = ({ route }) => {
  const { data, methods, loading, error } = useTasks();
  const { total } = data;
  const { createTask } = methods;

  console.log("TASK", route)
  return (
    <ModalBasicTemplate title="Create task">
      <TaskForm taskId={route.params?.taskId} />
    </ModalBasicTemplate>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default Modal1;
