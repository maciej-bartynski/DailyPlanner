import React from 'react';
import {View} from 'react-native';
import ContentWrapperStyles from './ContentWrapper.styles';

const ContentWrapper: React.FC = ({
  children,
}) => {
  return <View style={ContentWrapperStyles.card__wrapper}>{children}</View>;
};

export default ContentWrapper;
