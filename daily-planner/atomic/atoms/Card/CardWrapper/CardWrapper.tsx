import React, {useMemo} from 'react';
import {View} from 'react-native';
import CardWrapperStyles from './CardWrapper.styles';
import {eColors} from 'lib/styles/colors';

interface Props {
  colorVariant?: eColors;
}

const CardWrapper: React.FC<Props> = ({
  colorVariant = eColors.Primary,
  children,
}) => {
  const stylesArray = useMemo(
    () => [
      CardWrapperStyles.card__wrapper,
      {
        backgroundColor: colorVariant,
        borderColor: colorVariant,
      },
    ],
    [colorVariant],
  );

  return <View style={stylesArray}>{children}</View>;
};

export default CardWrapper;
