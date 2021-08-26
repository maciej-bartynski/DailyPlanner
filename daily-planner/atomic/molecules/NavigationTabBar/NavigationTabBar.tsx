import React from 'react';
import {View, Text} from 'react-native';
import styles from './NavigationTabBar.styles';
import {
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import {TouchableOpacity} from 'react-native-gesture-handler';
import navigate from 'lib/navigation';

type Props = BottomTabBarProps<BottomTabBarOptions>;

const NavigationTabBar: React.FC<Props> = props => {
  const {routeNames, index} = props.state;
  return (
    <View style={styles.navigationTabBar}>
      <View style={styles.navigationTabBar__inner}>
      {routeNames.map((name, id) => (
        <TouchableOpacity
          key={name}
          onPress={() => navigate({path: name})}
          containerStyle={styles.navigationTabBar__item}
          style={
            index === id
              ? styles.navigationTabBar__itemButton_active
              : styles.navigationTabBar__itemButton
          }>
          <Text
            style={
              index === id
                ? styles.navigationTabBar__itemLabel_active
                : styles.navigationTabBar__itemLabel
            }>
            {name}
          </Text>
        </TouchableOpacity>
      ))}
      </View>
    </View>
  );
};

export default NavigationTabBar;
