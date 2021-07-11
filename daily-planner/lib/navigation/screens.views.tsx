import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ViewsStackParamList} from 'lib/navigation/types';
import Tasks from 'screens/ViewTasks';
import Boards from 'screens/ViewBoards';
import {eViews} from 'lib/enums/screens';
import NavigationTabBar from 'atomic/molecules/NavigationTabBar';

const ViewsStack = createBottomTabNavigator<ViewsStackParamList>();

const ScreensConfiguration = {
  [eViews.Tasks]: {
    name: eViews.Tasks,
    component: Tasks,
  },
  [eViews.Boards]: {
    name: eViews.Boards,
    component: Boards,
  },
};

const Views = () => (
  <ViewsStack.Navigator
    initialRouteName={eViews.Tasks}
    tabBar={props => <NavigationTabBar {...props} />}>
    <ViewsStack.Screen {...ScreensConfiguration[eViews.Tasks]} />
    <ViewsStack.Screen {...ScreensConfiguration[eViews.Boards]} />
  </ViewsStack.Navigator>
);

export default Views;
