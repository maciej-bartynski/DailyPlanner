import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import navigationRef from 'lib/navigation/reference';
import {MainStackParamList} from 'lib/navigation/_types';
import Views from 'lib/navigation/screens.views';
import Modals from 'lib/navigation/screens.modals';
import {Provider} from 'react-redux';
import store from 'lib/storageRedux/storageRedux.store';

const MainStack = createStackNavigator<MainStackParamList>();

const App = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
