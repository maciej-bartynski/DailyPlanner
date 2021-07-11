import React from 'react';
import {TouchableHighlight, Text, GestureResponderEvent} from 'react-native';
import {eButtonVariant} from 'lib/enums/buttons';
import defaultStyles, {
  stylesSecondary,
  stylesTertiary,
  stylesPrimary,
  button_disabled,
} from './Button.styles';

type Props = {
  title: string;
  onPress?: (e: GestureResponderEvent) => void;
  onPressAsync?: (e: GestureResponderEvent) => Promise<void>;
  styles?: Record<string, Record<string, unknown>>;
  variant?: eButtonVariant;
  disabled?: boolean;
};

const Button: React.FC<Props> = ({
  title,
  onPress,
  onPressAsync,
  variant,
  disabled = false,
}) => {
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
      style={[styleSheet.button, disabled ? button_disabled : undefined]}
      onPress={onPressAsync ? onPressAsync : onPress}
      disabled={disabled}>
      <Text style={[styleSheet.title, disabled ? button_disabled : undefined]}>
        {title}
      </Text>
    </TouchableHighlight>
  );
};

export default Button;
