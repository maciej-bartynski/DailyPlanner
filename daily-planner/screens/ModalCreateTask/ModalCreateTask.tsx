import React from 'react';
import {ModalsStackParamList} from 'lib/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {ModalBasicTemplate} from 'atomic/templates/ModalBasicTemplate';
import TaskForm from 'components/TaskForm';
import {eModals} from 'lib/enums/screens';
import {cScreenTitles} from 'lib/enums/strings';

type ViewsScreensProps = RouteProp<
  ModalsStackParamList,
  eModals.ModalCreateTask
>;

type ViewProp = {
  route: ViewsScreensProps;
};

const ModalCreateTask: React.FC<ViewProp> = ({route}) => (
  <ModalBasicTemplate title={cScreenTitles[eModals.ModalCreateTask]}>
    <TaskForm taskId={route.params?.taskId} />
  </ModalBasicTemplate>
);

export default ModalCreateTask;
