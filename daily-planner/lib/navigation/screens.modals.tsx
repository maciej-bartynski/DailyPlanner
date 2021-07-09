import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ModalsStackParamList } from 'lib/navigation/types';
import ModalCreateTask from 'views/ModalCreateTask';
import ModalCreateBoard from 'views/ModalCreateBoard';
import ModalAddTasks from 'views/ModalAddTasks';
import { eModals } from 'lib/enums/screens';

const ModalStack = createStackNavigator<ModalsStackParamList>();

const modalDefaultOptions = {
  headerShown: false,
};

const ScreensConfiguration = {
  [eModals.ModalCreateTask]: {
    name: eModals.ModalCreateTask,
    component: ModalCreateTask,
    options: modalDefaultOptions
  },
  [eModals.ModalCreateBoard]: {
    name: eModals.ModalCreateBoard,
    component: ModalCreateBoard,
    options: modalDefaultOptions
  },
  [eModals.ModalAddTasks]: {
    name: eModals.ModalAddTasks,
    component: ModalAddTasks,
    options: modalDefaultOptions
  },
}

const Modals = () => {
  return (
    <ModalStack.Navigator mode="modal">
      <ModalStack.Screen {...ScreensConfiguration[eModals.ModalCreateTask]} />
      <ModalStack.Screen {...ScreensConfiguration[eModals.ModalCreateBoard]} />
      <ModalStack.Screen {...ScreensConfiguration[eModals.ModalAddTasks]} />
    </ModalStack.Navigator>
  );
};

export default Modals;
