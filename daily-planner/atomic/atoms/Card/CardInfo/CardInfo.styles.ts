import { StyleSheet } from 'react-native';
import { eColors } from 'lib/styles/colors';
import { extraInfoListRecord } from 'lib/styles/fonts';

const CardInfoStyles = StyleSheet.create({
  card__info: {
    ...extraInfoListRecord,
    width: '100%',
    paddingTop: 5,
    color: eColors.Gray
  },
});

export default CardInfoStyles;
