import React, { useMemo } from 'react';
import { Text, View } from 'react-native';
import CardTitleStyles from './CardTitle.styles';
import { eColors } from 'lib/styles/colors';

interface Props {
  title: string;
}

const CardTitle: React.FC<Props> = ({
  title
}) => {
  return (
    <View style={CardTitleStyles.card__titleWrapper}>
      <Text 
        numberOfLines={1}
        style={CardTitleStyles.card__title}
      >
        {title}
      </Text>
    </View>
  );
};

export default CardTitle;
