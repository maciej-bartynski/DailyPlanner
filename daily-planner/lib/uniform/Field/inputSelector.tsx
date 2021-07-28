import {eFieldType} from 'lib/enums/forms';
import {DEFAULT_PROPS_INPUT_TEXT, DEFAULT_PROPS_INPUT_RANGE} from './config';
import InputValueSlider from '../InputValueSlider';
import InputTextArea from '../InputTextArea';
import InputText from '../InputText';
import React from 'react';

type tParams<FormContextType, CustomInputProps, PropsType> = {
  type: eFieldType;
  currentValue: FormContextType[keyof FormContextType];
  onChangeHandler: (e: string | React.ChangeEvent<any>) => void;
  onBlurHandler: ((e: any) => void) | void;
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

    default: {
      currentInputElement = null;
    }
  }

  return currentInputElement;
}

export default inputSelector;
