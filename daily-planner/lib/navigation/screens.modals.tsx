import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ModalsStackParamList} from 'lib/navigation/_types';
import ModalCreateTask from 'views/ModalCreateTask';
import ModalCreateBoard from 'views/ModalCreateBoard';

const ModalStack = createStackNavigator<ModalsStackParamList>();

const modalDefaultOptions = {
  headerShown: false,
};

const Modals = () => {
  return (
    <ModalStack.Navigator mode="modal">
      <ModalStack.Screen
        name="ModalCreateTask"
        component={ModalCreateTask}
        options={modalDefaultOptions}
      />
      <ModalStack.Screen
        name="ModalCreateBoard"
        component={ModalCreateBoard}
        options={modalDefaultOptions}
      />
    </ModalStack.Navigator>
  );
};

export default Modals;
