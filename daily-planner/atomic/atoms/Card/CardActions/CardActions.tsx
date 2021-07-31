import React from 'react';
import {View} from 'react-native';
import CardActionStyles from './CartActions.styles';

const CardActions: React.FC = ({children}) => {
  return <View style={CardActionStyles.card__actions}>{children}</View>;
};

export default CardActions;
