import {StyleSheet} from 'react-native';
import {iInputRangeStylesheet} from 'atomic/atoms/InputValueSlider/InputValueSlider.styles';

const valueSliderStyles: Partial<iInputRangeStylesheet> = StyleSheet.create({
  input: {
    borderWidth: 0,
    borderColor: 'transparent',
    borderRadius: 10,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
});

export default valueSliderStyles;
