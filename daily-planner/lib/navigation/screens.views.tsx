import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ViewsStackParamList} from 'lib/navigation/types';
import Tasks from 'views/Tasks';
import Boards from 'views/Boards';
import { eViews } from 'lib/enums/screens';

const ViewsStack = createBottomTabNavigator<ViewsStackParamList>();

const ScreensConfiguration = {
  [eViews.Tasks]: {
    name: eViews.Tasks,
    component: Tasks
  },
  [eViews.Boards]: {
    name: eViews.Boards,
    component: Boards,
  }
}

const Views = () => {
  return (
    <ViewsStack.Navigator initialRouteName={eViews.Tasks}>
      <ViewsStack.Screen {...ScreensConfiguration[eViews.Tasks]} />
      <ViewsStack.Screen {...ScreensConfiguration[eViews.Boards]}  />
    </ViewsStack.Navigator>
  );
};

export default Views;
