import {StyleSheet} from 'react-native';
import {titleListRecord} from 'lib/styles/fonts';
import { eColors } from 'lib/styles/colors';

const CardTitleStyles = StyleSheet.create({
  card__titleWrapper: {
    width: '100%',
    flexDirection: 'row',
  },
  card__title: {
    ...titleListRecord,
    color: eColors.Gray,
  },
});

export default CardTitleStyles;
