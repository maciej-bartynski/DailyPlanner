import React from 'react';
import {View, Text, StyleProp, ViewStyle, TextStyle} from 'react-native';
import useResultStylesheet from 'lib/hooks/useResultStylesheet';
import defaultStyles from './FieldLabel.styles';

interface Props {
  label: string;
  styles?: Partial<iFormFieldLabelStylesheet>;
}

export interface iFormFieldLabelStylesheet {
  fieldWrapper: StyleProp<ViewStyle>;
  fieldLabel: StyleProp<TextStyle>;
}

const FieldLabel: React.FC<Props> = ({label, styles, children}) => {
  const resultStyles = useResultStylesheet<iFormFieldLabelStylesheet>({
    defaultStyles,
    styles,
  });

  return (
      <Text style={resultStyles.fieldLabel}>{label}</Text>
  );
};

export default FieldLabel;
