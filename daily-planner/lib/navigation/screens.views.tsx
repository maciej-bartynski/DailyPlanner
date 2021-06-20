import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ViewsStackParamList } from 'lib/navigation/_types';
import Dashboard from 'views/Dashboard';
import Tasks from 'views/Tasks';
import Detail from 'views/Detail';

const ViewsStack = createBottomTabNavigator<ViewsStackParamList>();

const Views = () => {
  return (
    <ViewsStack.Navigator initialRouteName="Dashboard">
      <ViewsStack.Screen
        name="Dashboard"
        component={Dashboard}
        initialParams={{title: 'Board'}}
      />
      <ViewsStack.Screen
        name="Tasks"
        component={Tasks}
      />
      <ViewsStack.Screen
        name="Detail"
        component={Detail}
        initialParams={{title: 'Detail'}}
      />
    </ViewsStack.Navigator>
  );
};

export default Views;
