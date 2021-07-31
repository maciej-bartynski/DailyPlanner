import React, {useMemo} from 'react';
import {Text} from 'react-native';
import CardTitleStyles from './CardTitle.styles';
import {eColors} from 'lib/styles/colors';

interface Props {
  title: string;
  typoColorVariant?: eColors;
}

const CardTitle: React.FC<Props> = ({
  title,
  typoColorVariant = eColors.White,
}) => {
  const stylesArray = useMemo(
    () => [CardTitleStyles.card__title, {color: typoColorVariant}],
    [typoColorVariant],
  );

  return <Text style={stylesArray}>{title}</Text>;
};

export default CardTitle;
