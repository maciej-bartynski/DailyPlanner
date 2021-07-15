import {StyleSheet} from 'react-native';
import {eFontSize, eFontWeight} from 'lib/styles/fonts';
import {shadowMain_disabled} from 'lib/styles/shadow';
import {eColors} from 'lib/styles/colors';

export const button_disabled = {
  backgroundColor: eColors.Gray,
  borderColor: 'transparent',
  ...shadowMain_disabled,
  color: eColors.White,
};

export const stylesPrimary = StyleSheet.create({
  button: {
    borderColor: eColors.Blue as string,
    borderWidth: 0,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: eColors.Blue,
  },
  title: {
    color: eColors.White,
    fontSize: eFontSize.paragraph,
    fontWeight: eFontWeight.bold,
  },
});

export const stylesSecondary = StyleSheet.create({
  button: {
    borderColor: eColors.Gray as string,
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingTop: 10,
    paddingBottom: 12,
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
    paddingTop: 10,
    paddingBottom: 12,
    backgroundColor: eColors.White,
  },
  title: {
    color: eColors.Gray,
    fontSize: eFontSize.paragraph,
    fontWeight: eFontWeight.bold,
  },
});

export default stylesPrimary;
