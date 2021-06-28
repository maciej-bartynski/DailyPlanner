import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ViewsStackParamList} from 'lib/navigation/_types';
import Tasks from 'views/Tasks';
import Boards from 'views/Boards';

const ViewsStack = createBottomTabNavigator<ViewsStackParamList>();

const Views = () => {
  return (
    <ViewsStack.Navigator initialRouteName="Tasks">
      <ViewsStack.Screen name="Tasks" component={Tasks} />
      <ViewsStack.Screen name="Boards" component={Boards} />
    </ViewsStack.Navigator>
  );
};

export default Views;
