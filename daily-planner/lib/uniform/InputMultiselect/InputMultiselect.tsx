import React, {useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import InputMultiselectStyles from './InputMultiselect.styles';
import SelectedOption from './atoms/SelectedOption';
import Option from './atoms/Option';
import {ScrollView} from 'react-native-gesture-handler';

export type tOption = {
  label: string;
  value: string;
};

export interface InputMultiselectProps {
  onBlur: (e?: any) => void;
  onValueChange: (values: tOption[]) => void;
  selectedOptions?: tOption[];
  options?: tOption[];
}

const InputMultiselect: React.FC<InputMultiselectProps> = ({
  onBlur,
  selectedOptions,
  options,
  onValueChange,
}) => {
  const [focused, setFocused] = useState();

  const onPressHandler = () => {
    if (focused) {
      onBlur();
    } else {
  
    }
  };

  const onSelect = (value: string) => {
    if (!options || !(options instanceof Array)) {
      return;
    }

    const selectedVal = options.find(item => item.value === value);
    if (selectedVal) {
      const newValues = selectedOptions
        ? [...selectedOptions, selectedVal]
        : [selectedVal];
      onValueChange(newValues);
    }
  };

  const onUnselect = (value: string) => {
    if (!options || !(options instanceof Array)) {
      return;
    }
    onValueChange(options.filter(item => item.value === value));
  };

  return (
    <View style={InputMultiselectStyles.input__input}>
      <Pressable
        onPress={onPressHandler}
        style={InputMultiselectStyles.input__inputInner}>
        <View style={InputMultiselectStyles.input__results}>
          {selectedOptions instanceof Array &&
            !!selectedOptions.length &&
            selectedOptions.map(option => (
              <SelectedOption
                key={option.value}
                {...option}
                unselectOption={onUnselect}
              />
            ))}
        </View>
      </Pressable>
      {focused && (
        <View style={InputMultiselectStyles.input__optionsContainer}>
          <ScrollView
            style={InputMultiselectStyles.input__optionsScrollView}
            contentContainerStyle={InputMultiselectStyles.input__options}>
            {options instanceof Array &&
              !!options.length &&
              options.map(option => (
                <Option
                  key={option.value}
                  {...option}
                  unselectOption={onUnselect}
                  selectOption={onSelect}
                  isSelected={
                    !!selectedOptions?.some(item => item.value === option.value)
                  }
                />
              ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default InputMultiselect;
