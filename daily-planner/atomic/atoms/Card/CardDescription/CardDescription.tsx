import React, { useMemo } from 'react';
import { Text } from 'react-native';
import CardDescriptionStyles from './CardDescription.styles';
import { eColors } from 'lib/styles/colors';

interface Props {
  description: string;
}

const CardDescription: React.FC<Props> = ({
  description,
}) => {
  return (
    <Text
      numberOfLines={2}
      style={CardDescriptionStyles.card__info}
    >
      {description}
    </Text>
  )
};

export default CardDescription;
