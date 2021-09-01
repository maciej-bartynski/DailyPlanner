import {StyleSheet} from 'react-native';
import {shadowMain} from 'lib/styles/shadow';
import {eColors} from 'lib/styles/colors';
import {eFontWeight} from 'lib/styles/fonts';

const navigationTabBarStyles = StyleSheet.create({
  navigationTabBar: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  navigationTabBar__inner:{
    ...shadowMain,
    backgroundColor: eColors.White,
    borderRadius: 40,
    flexDirection: 'row',
  },
  navigationTabBar__item: {
    flex: 0,
    margin: 5,
  },
  navigationTabBar__itemButton: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: eColors.White,
    borderRadius: 20,
    paddingHorizontal: 10
  },
  navigationTabBar__itemButton_active: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: eColors.White,
    borderRadius: 20,
    backgroundColor: eColors.Primary,
    paddingHorizontal: 10
  },
  navigationTabBar__itemLabel: {
    color: eColors.Primary,
    fontWeight: eFontWeight.black,
  },
  navigationTabBar__itemLabel_active: {
    color: eColors.White,
    fontWeight: eFontWeight.black,
  },
});

export default navigationTabBarStyles;
