import {StyleSheet} from 'react-native';
import {mixins} from 'lib/styles/fonts';

const CardDescriptionStyles = StyleSheet.create({
  card__info: {
    ...mixins.paragraph,
    paddingBottom: 10,
  },
});

export default CardDescriptionStyles;
