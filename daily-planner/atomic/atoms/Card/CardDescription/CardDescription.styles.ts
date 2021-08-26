import {StyleSheet} from 'react-native';
import { descriptionListRecord} from 'lib/styles/fonts';
import { eColors } from 'lib/styles/colors';

const CardDescriptionStyles = StyleSheet.create({
  card__info: {
    ...descriptionListRecord,
    color: eColors.Gray,
    marginTop: 2,
  },
});

export default CardDescriptionStyles;
