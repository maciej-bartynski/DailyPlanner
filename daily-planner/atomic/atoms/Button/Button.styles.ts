import {StyleSheet} from 'react-native';
import {eFontSize, eFontWeight} from 'lib/styles/fonts';
import {shadowMain, shadowMain_disabled} from 'lib/styles/shadow';
import {eColors} from 'lib/styles/colors';

export const button_disabled = {
  backgroundColor: eColors.Gray,
  borderColor: 'transparent',
  ...shadowMain_disabled,
  color: eColors.White,
};

export const stylesPrimary = StyleSheet.create({
  button: {
    ...shadowMain,
    borderColor: eColors.Blue as string,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: eColors.White,
  },
  title: {
    color: 'blue',
    fontSize: eFontSize.paragraph,
    fontWeight: eFontWeight.bold,
  },
});

export const stylesSecondary = StyleSheet.create({
  button: {
    ...shadowMain,
    borderColor: eColors.Gray as string,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: eColors.White,
  },
  title: {
    color: eColors.Gray,
    fontSize: eFontSize.paragraph,
    fontWeight: eFontWeight.bold,
  },
});

export const stylesTertiary = StyleSheet.create({
  button: {
    borderColor: 'transparent',
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: eColors.White,
    ...shadowMain_disabled,
  },
  title: {
    color: eColors.Gray,
    fontSize: eFontSize.paragraph,
    fontWeight: eFontWeight.bold,
  },
});

export default stylesPrimary;
