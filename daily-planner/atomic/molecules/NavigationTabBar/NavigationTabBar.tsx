import React from 'react';
import { View, Text } from 'react-native';
import styles from './NavigationTabBar.styles';
import {
  BottomTabBarProps,
  BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import { TouchableOpacity } from 'react-native-gesture-handler';
import navigate from 'lib/navigation';
import ButtonActionRoundedSmall from 'atomic/atoms/ButtonActionRoundedSmall';
import ButtonActionRoundedBig from 'atomic/atoms/ButtonActionRoundedBig';

type Props = BottomTabBarProps<BottomTabBarOptions>;

const NavigationTabBar: React.FC<Props> = props => {
  const { routeNames, index } = props.state;
  return (
    <View style={styles.navigationTabBar}>
      <View style={styles.navigationTabBar__inner}>
        {routeNames.map((name, id) => index === id
          ? (
            <ButtonActionRoundedBig
              key={id}
              label={name}
              onPress={() => navigate({ path: name })}
            />
          )
          : (
            <ButtonActionRoundedSmall
              key={id}
              label={name}
              onPress={() => navigate({ path: name })}
            />
          ))}
      </View>
    </View>
  );
};

export default NavigationTabBar;
