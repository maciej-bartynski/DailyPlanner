import {StyleSheet} from 'react-native';
import {shadowMain} from 'lib/styles/shadow';
import {eColors} from 'lib/styles/colors';
import {eFontWeight} from 'lib/styles/fonts';

const navigationTabBarStyles = StyleSheet.create({
  navigationTabBar: {
    height: 70,
    backgroundColor: eColors.Primary,
    width: '100%',
    ...shadowMain,
    flexDirection: 'row',
  },
  navigationTabBar__item: {
    flex: 1,
    margin: 5,
  },
  navigationTabBar__itemButton: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: eColors.White,
    backgroundColor: eColors.Primary,
    borderRadius: 20,
  },
  navigationTabBar__itemButton_active: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: eColors.White,
    backgroundColor: eColors.White,
    borderRadius: 20,
  },
  navigationTabBar__itemLabel: {
    color: eColors.White,
  },
  navigationTabBar__itemLabel_active: {
    color: eColors.Blue,
    fontWeight: eFontWeight.black,
  },
});

export default navigationTabBarStyles;
