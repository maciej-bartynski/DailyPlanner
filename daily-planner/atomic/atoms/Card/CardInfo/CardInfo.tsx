import React, {useMemo} from 'react';
import {Text} from 'react-native';
import CardInfoStyles from './CardInfo.styles';
import {eColors} from 'lib/styles/colors';

interface Props {
  info: string;
}

const CardInfo: React.FC<Props> = ({
  info,
}) => {
  return <Text style={CardInfoStyles.card__info}>{info}</Text>;
};

export default CardInfo;
