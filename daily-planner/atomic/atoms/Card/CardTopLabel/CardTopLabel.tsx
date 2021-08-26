import React from 'react';
import {Text} from 'react-native';
import CardTopLabelStyles from './CardTopLabel.styles';

interface Props {
  topLabel: string;
}

const CardTopLabel: React.FC<Props> = ({
    topLabel,
}) => {
  return <Text style={CardTopLabelStyles.card__topLabel}>{topLabel}</Text>;
};

export default CardTopLabel;
