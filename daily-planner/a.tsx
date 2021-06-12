import React from 'react';
import { View, Text } from "react-native";
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import App2 from "b";
//import 'react-native-gesture-handler';
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
const App = () => {
  return (
    <View>
        <Text>asdfasdf</Text>
        <Dashboard route={{params:{}}}/>
        <App2/>
    </View>
  );
};

export default App;

