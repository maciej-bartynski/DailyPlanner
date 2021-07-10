import React from 'react';
import {TouchableHighlight, Text, GestureResponderEvent} from 'react-native';
import {eButtonVariant} from 'lib/enums/buttons';
import defaultStyles, {
  stylesSecondary,
  stylesTertiary,
  stylesPrimary,
} from './Button.styles';

type Props = {
  title: string;
  onPress?: (e: GestureResponderEvent) => void;
  onPressAsync?: (e: GestureResponderEvent) => Promise<void>;
  styles?: Record<string, Record<string, unknown>>;
  variant?: eButtonVariant;
};

const Button: React.FC<Props> = ({title, onPress, onPressAsync, variant}) => {
  let styleSheet = defaultStyles;

  switch (true) {
    case variant === eButtonVariant.Secondary: {
      styleSheet = stylesSecondary;
      break;
    }
    case variant === eButtonVariant.Tertiary: {
      styleSheet = stylesTertiary;
      break;
    }
    default: {
      styleSheet = stylesPrimary;
    }
  }

  return (
    <TouchableHighlight
      underlayColor={'rgba(0,0,0,0.3)'}
      style={styleSheet.button}
      onPress={onPressAsync ? onPressAsync : onPress}>
      <Text style={styleSheet.title}>{title}</Text>
    </TouchableHighlight>
  );
};

export default Button;
