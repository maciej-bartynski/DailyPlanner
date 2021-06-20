import React, { useState } from 'react';
import PageLayout from 'components/PageLayout';
import {View, Text, Button, useColorScheme, StyleSheet} from 'react-native';
import {ViewsStackParamList} from 'lib/navigation/_types';
import {RouteProp} from '@react-navigation/native';
import {navigation} from 'lib/navigation';
import ButtonCreateTask from 'components/ButtonCreateTask';

import {ScrollView} from 'react-native-gesture-handler';

const Colors = {
  primary: '#1292B4',
  white: '#FFF',
  lighter: '#F3F3F3',
  light: '#DAE1E7',
  dark: '#444',
  darker: '#222',
  black: '#000',
};

type ViewsScreensProps = RouteProp<ViewsStackParamList, 'Dashboard'>;

type ViewProp = {
  route: ViewsScreensProps;
};

const Dashboard: React.FC<ViewProp> = ({route}) => {

  const [scrollEnabled, setScrollEnabled]= useState(true);

  return (
    <PageLayout>
      <ScrollView 
        contentContainerStyle={styles.tasks}
        scrollEnabled={scrollEnabled}
      >
        
      </ScrollView>
      <View style={styles.button}>
        <ButtonCreateTask />
      </View>
    </PageLayout>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  tasks: {
    //flex: 1,
    borderWidth: 2,
    borderColor: "red"
  },
});

export default Dashboard;
