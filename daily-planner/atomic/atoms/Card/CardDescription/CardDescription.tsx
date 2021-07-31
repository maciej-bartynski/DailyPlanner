import React, {useMemo} from 'react';
import {Text} from 'react-native';
import CardDescriptionStyles from './CardDescription.styles';
import {eColors} from 'lib/styles/colors';

interface Props {
  description: string;
  typoColorVariant?: eColors;
}

const CardDescription: React.FC<Props> = ({
  description,
  typoColorVariant = eColors.White,
}) => {
  const stylesArray = useMemo(
    () => [CardDescriptionStyles.card__info, {color: typoColorVariant}],
    [typoColorVariant],
  );

  return <Text style={stylesArray}>{description}</Text>;
};

export default CardDescription;
