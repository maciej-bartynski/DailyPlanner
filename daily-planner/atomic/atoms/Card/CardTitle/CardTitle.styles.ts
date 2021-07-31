import {StyleSheet} from 'react-native';
import {mixins} from 'lib/styles/fonts';

const CardTitleStyles = StyleSheet.create({
  card__title: {
    ...mixins.subtitle,
    marginBottom: 10,
    color: 'white',
  },
});

export default CardTitleStyles;
