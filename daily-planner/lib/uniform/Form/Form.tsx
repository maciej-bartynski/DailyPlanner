import React from 'react';
import { Formik } from 'formik';
import {
  tFormProps,
} from './config';
import FormWarningLayer from './FormWarningLayer';

function validationPlaceholderFactory<FormType>() {
  return () => ({} as Record<keyof FormType, unknown>);
};

const Form = function <FormType extends Record<keyof FormType, unknown>>(props: tFormProps<FormType>) {
  const {
    initialValues,
    validation = validationPlaceholderFactory<FormType>(),
    onSubmit,
    children,
  } = props;

  return (
    <Formik
      initialValues={initialValues}
      validate={validation}
      validateOnBlur={false}
      validateOnChange={true}
      onSubmit={onSubmit}
      validateOnMount={false}
    >
      <FormWarningLayer<FormType> {...props}>
        {children}
      </FormWarningLayer>
    </Formik>
  );
};

export default Form;
