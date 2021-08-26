import { StyleSheet } from 'react-native';
import { eColors } from 'lib/styles/colors';
import { topLabelListRecord } from 'lib/styles/fonts';

const CardTopLabelStyles = StyleSheet.create({
  card__topLabel: {
    ...topLabelListRecord,
    color: eColors.Gray,
    width: '100%',
    textAlign: 'left',
    marginBottom: 5,
  },
});

export default CardTopLabelStyles;
