import React, {useMemo} from 'react';
import {View} from 'react-native';
import CardWrapperStyles from './CardWrapper.styles';
import {eColors} from 'lib/styles/colors';

interface Props {
  colorVariant?: eColors;
}

const CardWrapper: React.FC<Props> = ({
  children,
}) => {
  return <View style={CardWrapperStyles.card__wrapper}>{children}</View>;
};

export default CardWrapper;
