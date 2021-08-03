import React, {
  PropsWithChildren,
  useMemo,
  useState,
  useCallback,
  useRef,
  useEffect,
  Fragment,
} from 'react';
import Label from 'lib/uniform/Label';
import Message from '../Message';
import {useFormContext} from 'lib/uniform/Form/config';
import {InputProps, FormFieldRequiredProps, eFieldVariant} from './config';
import Border from '../Border';
import inputSelector from './inputSelector';
import {Modal} from 'react-native';
import FocusModal from '../helpers/elements/FocusModal';
import {TextInput} from 'react-native';

type Props<FormContextType, CustomInputProps> = PropsWithChildren<
  InputProps<CustomInputProps> & FormFieldRequiredProps<FormContextType>
>;

const FormFieldModal: React.FC<{
  focused: boolean;
  onModalShow: () => void;
}> = ({focused, onModalShow, children}) =>
  focused ? (
    <Modal
      visible={focused}
      transparent={false}
      animationType="fade"
      onShow={onModalShow}>
      <FocusModal>{children}</FocusModal>
    </Modal>
  ) : (
    <Fragment>{children}</Fragment>
  );

const FormField = function <FormContextType, CustomInputProps>(
  props: Props<FormContextType, CustomInputProps>,
) {
  const [focused, setFocused] = useState(false);
  const inputReference = useRef<TextInput>(null);

  const {name, label, type, variant, ...rest} = props;

  const {handleChange, handleBlur, values} = useFormContext<FormContextType>();

  const currentValue = values[name];
  const onChangeHandler = useMemo(
    () => handleChange(name),
    [name, handleChange],
  );

  const onFocusHandler = useCallback(() => {
    setFocused(true);
  }, [setFocused]);

  const onBlurHandler = useCallback(
    e => {
      setFocused(false);
      const onFormikBlur = handleBlur(name) as (e: any) => void;
      if (typeof onFormikBlur === 'function' && e) {
        onFormikBlur(e);
      }
    },
    [handleBlur, name, setFocused],
  );

  const currentInputElement = useMemo(
    () =>
      inputSelector<FormContextType, CustomInputProps, typeof rest>({
        type,
        currentValue,
        onChangeHandler,
        onBlurHandler,
        onFocusHandler,
        rest,
        inputReference,
        focused,
      }),
    [
      type,
      currentValue,
      onChangeHandler,
      onBlurHandler,
      onFocusHandler,
      focused,
      rest,
      inputReference,
    ],
  );

  const onModalShow = useCallback(() => {
    if (inputReference.current) {
      inputReference.current.focus();
    }
  }, [inputReference.current]);

  if (variant === eFieldVariant.Naked && currentInputElement) {
    return currentInputElement;
  }

  return (
    <FormFieldModal focused={focused} onModalShow={onModalShow}>
      <Label label={label || ''}>
        <Border name={name}>{currentInputElement}</Border>
        <Message<FormContextType> name={name} />
      </Label>
    </FormFieldModal>
  );

  // if (focused && currentInputElement) {
  //   return (
  //     <Modal
  //       visible={focused}
  //       transparent={false}
  //       animationType='fade'
  //       onShow={onModalShow}
  //     >
  //       <FocusModal>
  //         <Label label={label || ''}>
  //           <Border name={name}>{currentInputElement}</Border>
  //           <Message<FormContextType> name={name} />
  //         </Label>
  //       </FocusModal>
  //     </Modal>
  //   )
  // }

  // return (
  //   currentInputElement && (
  //     <Label label={label || ''}>
  //       <Border name={name}>{currentInputElement}</Border>
  //       <Message<FormContextType> name={name} />
  //     </Label>
  //   )
  // );
};

export default FormField;
