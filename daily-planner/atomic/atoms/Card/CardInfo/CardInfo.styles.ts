import {StyleSheet} from 'react-native';
import {mixins} from 'lib/styles/fonts';

const CardInfoStyles = StyleSheet.create({
  card__info: {
    ...mixins.paragraph,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
});

export default CardInfoStyles;
