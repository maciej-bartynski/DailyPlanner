import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import navigationRef from 'lib/navigation/reference';
import {
  MainStackParamList,
  ViewsStackParamList,
  ModalsStackParamList,
} from 'lib/navigation/_types';
import Modal1 from 'views/Modal1';
import Modal2 from 'views/Modal2';
import Dashboard from 'views/Dashboard';
import Task from 'views/Task';
import Detail from 'views/Detail';
import TaskContextProvider from './ctxes/tasks/tasks.provider';

const MainStack = createStackNavigator<MainStackParamList>();
const ViewsStack = createStackNavigator<ViewsStackParamList>();
const ModalStack = createStackNavigator<ModalsStackParamList>();

const modalDefaultOptions = {
  headerShown: false,
};

const Modals = () => {
  return (
    <ModalStack.Navigator mode="modal">
      <ModalStack.Screen
        name="Modal1"
        component={Modal1}
        initialParams={{title: 'Modal 1'}}
        options={modalDefaultOptions}
      />
      <ModalStack.Screen
        name="Modal2"
        component={Modal2}
        initialParams={{title: 'Modal 2'}}
        options={modalDefaultOptions}
      />
    </ModalStack.Navigator>
  );
};

const Views = () => {
  return (
    <ViewsStack.Navigator initialRouteName="Dashboard">
      <ViewsStack.Screen
        name="Dashboard"
        component={Dashboard}
        initialParams={{title: 'Board'}}
      />
      <ViewsStack.Screen
        name="Task"
        component={Task}
        initialParams={{title: 'Task'}}
      />
      <ViewsStack.Screen
        name="Detail"
        component={Detail}
        initialParams={{title: 'Detail'}}
      />
    </ViewsStack.Navigator>
  );
};

const App = () => {
  return (
    <TaskContextProvider>
      <NavigationContainer ref={navigationRef}>
        <MainStack.Navigator mode="modal">
          <MainStack.Screen
            name="Views"
            component={Views}
            options={{headerShown: false}}
          />
          <MainStack.Screen
            name="Modals"
            component={Modals}
            options={{headerShown: false}}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
  );
};

export default App;
