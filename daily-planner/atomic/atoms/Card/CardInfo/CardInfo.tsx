import React, {useMemo} from 'react';
import {Text} from 'react-native';
import CardInfoStyles from './CardInfo.styles';
import {eColors} from 'lib/styles/colors';

interface Props {
  info: string;
  typoColorVariant?: eColors;
}

const CardInfo: React.FC<Props> = ({
  info,
  typoColorVariant = eColors.White,
}) => {
  const stylesArray = useMemo(
    () => [CardInfoStyles.card__info, {color: typoColorVariant}],
    [typoColorVariant],
  );

  return <Text style={stylesArray}>{info}</Text>;
};

export default CardInfo;
