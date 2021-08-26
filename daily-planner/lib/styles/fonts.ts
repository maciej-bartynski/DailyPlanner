import {StyleSheet} from 'react-native';

export enum eFontSize {
  title = 20,
  subtitle = 18,
  headline = 16,
  paragraph = 14,
  smallText = 12,
  tinyText = 10,
}

export enum eFontWeight {
  extraBlack = 'bold',
  black = 'bold',
  extraBold = 'bold',
  bold = 'bold',
  stress = 'bold',
  normal = 'normal',
  thin = 'normal',
  extraThin = 'normal',
  white = 'normal',
}

/**
 * List with records fonts
 */
export const titleListRecord = {
  fontSize: 15,
  fontWeight: eFontWeight.stress,
  lineHeight: 15
}

export const extraInfoListRecord = {
  fontSize: 10,
  fontWeight: eFontWeight.stress,
  lineHeight: 10
}

export const descriptionListRecord = {
  fontSize: 10,
  fontWeight: eFontWeight.normal,
  lineHeight: 13
}

export const topLabelListRecord = {
  fontSize: 10,
  fontWeight: eFontWeight.normal,
  lineHeight: 10
}

/**
 * Detail page fonts
 */

export const titleTypoMixin = {
  fontSize: 15,
  fontWeight: eFontWeight.stress,
  lineHeight: 20
}

export const labelTypoMixin = {
  fontSize: 12,
  fontWeight: eFontWeight.stress,
  lineHeight: 18
}

export const paragraphTypoMixin = {
  fontSize: 12,
  fontWeight: eFontWeight.normal,
  lineHeight: 18
}

export const mixins = StyleSheet.create({
  title: {
    fontSize: eFontSize.title,
    fontWeight: eFontWeight.bold,
  },
  subtitle: {
    fontSize: eFontSize.subtitle,
    fontWeight: eFontWeight.stress,
  },
  headline: {
    fontSize: eFontSize.headline,
    fontWeight: eFontWeight.normal,
  },
  paragraph: {
    fontSize: eFontSize.paragraph,
    fontWeight: eFontWeight.normal,
  },
  input: {
    fontSize: eFontSize.smallText,
    fontWeight: eFontWeight.normal,
  },
  label: {
    fontSize: eFontSize.tinyText,
    fontWeight: eFontWeight.bold,
  },
});
