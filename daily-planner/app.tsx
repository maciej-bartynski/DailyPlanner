import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import navigationRef from 'lib/navigation/reference';
import { MainStackParamList } from 'lib/navigation/types';
import Views from 'lib/navigation/screens.views';
import Modals from 'lib/navigation/screens.modals';
import { Provider } from 'react-redux';
import store from 'lib/storageRedux/storageRedux.store';
import { eScreens } from "lib/enums/screens";
const MainStack = createStackNavigator<MainStackParamList>();

const ScreensConfiguration = {
  [eScreens.Views]: {
    name: eScreens.Views,
    component: Views,
    options: {
      headerShown: false
    }
  },
  [eScreens.Modals]: {
    name: eScreens.Modals,
    component: Modals,
    options: {
      headerShown: false
    }
  }
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer ref={navigationRef}>
        <MainStack.Navigator mode="modal">
          <MainStack.Screen
            {...ScreensConfiguration[eScreens.Views]}
          />
          <MainStack.Screen
            {...ScreensConfiguration[eScreens.Modals]}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
