import React, {useMemo} from 'react';
import {Formik, useFormikContext} from 'formik';
import {
  tFormProps,
  tUseWarningParams,
  getFormContext,
  tFormErrors,
} from './config';
import {useState, useEffect} from 'react';

const validationPlaceholder = () => ({});

const useWarnings = function <FormType>({
  values,
  warning,
}: tUseWarningParams<FormType>) {

  const [warnings, setWarnings] = useState<tFormErrors<FormType>>({});

  useEffect(() => {
    async function getWarnings(valuesReceived: FormType) {
      const warns = await warning(valuesReceived);
      setWarnings(warns);
    }

    getWarnings(values);
  }, [values, warning]);

  return warnings;
};

const FormWarningLayer = function <FormType>(props: tFormProps<FormType>) {
  const {warning = validationPlaceholder, children} = props;

  const formikData = useFormikContext<FormType>();
  const {values} = formikData;
  const warnings = useWarnings<FormType>({values, warning});

  const context = useMemo(
    () => ({
      ...formikData,
      warnings,
    }),
    [formikData, warnings],
  );

  const CurrentFormContext = getFormContext<typeof context>();

  return (
    <CurrentFormContext.Provider value={context}>
      {children}
    </CurrentFormContext.Provider>
  );
};

const Form = function <FormType>(props: tFormProps<FormType>) {
  const {
    initialValues,
    validation = validationPlaceholder,
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
      <FormWarningLayer<FormType> {...props}>{children}</FormWarningLayer>
    </Formik>
  );
};

export default Form;
