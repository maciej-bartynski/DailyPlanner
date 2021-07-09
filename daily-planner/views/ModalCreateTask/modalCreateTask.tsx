import React from 'react';
import {ModalsStackParamList} from 'lib/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {ModalBasicTemplate} from 'atomic/templates/ModalBasicTemplate';
import TaskForm from 'components/TaskForm';

type ViewsScreensProps = RouteProp<ModalsStackParamList, 'ModalCreateTask'>;

type ViewProp = {
  route: ViewsScreensProps;
};

const Modal1: React.FC<ViewProp> = ({route}) => {
  return (
    <ModalBasicTemplate title="Create task">
      <TaskForm taskId={route.params?.taskId} />
    </ModalBasicTemplate>
  );
};

export default Modal1;
