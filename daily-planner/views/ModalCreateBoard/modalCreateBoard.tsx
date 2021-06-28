import React from 'react';
import {ModalsStackParamList} from 'lib/navigation/_types';
import {RouteProp} from '@react-navigation/native';
import {ModalBasicTemplate} from 'atomic/templates/ModalBasicTemplate';
import TaskForm from 'components/TaskForm';

type ViewsScreensProps = RouteProp<ModalsStackParamList, 'ModalCreateBoard'>;

type ViewProp = {
  route: ViewsScreensProps;
};

const ModalCreateBoard: React.FC<ViewProp> = ({route}) => {
  return (
    <ModalBasicTemplate title="Create board">
      <TaskForm taskId={route.params?.boardId} />
    </ModalBasicTemplate>
  );
};

export default ModalCreateBoard;
