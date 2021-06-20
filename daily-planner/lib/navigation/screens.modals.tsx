import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
    ModalsStackParamList,
} from 'lib/navigation/_types';
import ModalCreateTask from 'views/ModalCreateTask';
import Modal2 from 'views/Modal2';

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
                name="Modal2"
                component={Modal2}
                initialParams={{ title: 'Modal 2' }}
                options={modalDefaultOptions}
            />
        </ModalStack.Navigator>
    );
};

export default Modals;
