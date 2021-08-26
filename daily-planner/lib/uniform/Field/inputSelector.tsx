import {eFieldType} from 'lib/enums/forms';
import {
  DEFAULT_PROPS_INPUT_TEXT,
  DEFAULT_PROPS_INPUT_RANGE,
  DEFAULT_PROPS_MULTISELECT,
} from './config';
import InputValueSlider from '../InputValueSlider';
import InputTextArea from '../InputTextArea';
import InputText from '../InputText';
import React, {RefObject} from 'react';
import {TextInput} from 'react-native';
import InputMultiselect from '../InputMultiselect';

type tParams<FormContextType, CustomInputProps, PropsType> = {
  type: eFieldType;
  currentValue: FormContextType[keyof FormContextType];
  onChangeHandler: (e: string | React.ChangeEvent<any>) => void;
  onBlurHandler: (e: any) => void;
  rest: PropsType;
};

function inputSelector<FormContextType, CustomInputProps, PropsType>({
  type,
  currentValue,
  onChangeHandler,
  onBlurHandler,
  rest,
}: tParams<FormContextType, CustomInputProps, PropsType>) {
  let currentInputElement = null;

  const numericOnChangeHandler = (arg: number) => {
    onChangeHandler('' + arg);
  };

  const arrayOnChangeHandler = (arg: any[]) => {
    onChangeHandler(JSON.stringify(arg));
  };

  switch (true) {
    case type === eFieldType.TextInput: {
      const fieldProps = Object.assign({}, DEFAULT_PROPS_INPUT_TEXT, rest);
      currentInputElement =
        typeof currentValue === 'string' ? (
          <InputText
            {...fieldProps}
            value={currentValue}
            onChangeText={onChangeHandler}
            onBlur={onBlurHandler}
          />
        ) : null;
      break;
    }

    case type === eFieldType.TextArea: {
      const fieldProps = Object.assign({}, DEFAULT_PROPS_INPUT_TEXT, rest);
      currentInputElement =
        typeof currentValue === 'string' ? (
          <InputTextArea
            {...fieldProps}
            value={currentValue}
            onChangeText={onChangeHandler}
            onBlur={onBlurHandler}
          />
        ) : null;
      break;
    }

    case type === eFieldType.ValueSlider: {
      const fieldProps = Object.assign({}, DEFAULT_PROPS_INPUT_RANGE, rest);
      const fieldValueCastedToFloat = parseFloat(`${currentValue}`);
      const isFieldValueFloatValid =
        typeof fieldValueCastedToFloat === 'number' &&
        !isNaN(fieldValueCastedToFloat);

      currentInputElement = isFieldValueFloatValid ? (
        <InputValueSlider
          {...fieldProps}
          value={fieldValueCastedToFloat}
          onValueChange={numericOnChangeHandler}
        />
      ) : null;
      break;
    }

    case type === eFieldType.Multiselect: {
      const fieldProps = Object.assign({}, DEFAULT_PROPS_MULTISELECT, rest);

      const fieldValueCastedToArray: typeof fieldProps['options'] =
        typeof currentValue === 'string' ? JSON.parse(currentValue) : [];

      currentInputElement = (
        <InputMultiselect
          {...fieldProps}
          selectedOptions={fieldValueCastedToArray}
          onValueChange={arrayOnChangeHandler}
          onBlur={onBlurHandler}
        />
      );

      break;
    }

    default: {
      currentInputElement = null;
    }
  }

  return currentInputElement;
}

export default inputSelector;
