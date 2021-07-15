import {useState, useEffect} from 'react';

const useWarnings = function <FormContextType>(
  values: FormContextType,
  formWarningManager: (
    values: FormContextType,
  ) => Promise<Partial<Record<keyof FormContextType, string>>>,
) {
  const [warnings, setWarnings] =
    useState<Partial<Record<keyof FormContextType, string>>>();

  useEffect(() => {
    async function getWarnings(valuesReceived: FormContextType) {
      const warns = await formWarningManager(valuesReceived);
      setWarnings(warns);
    }

    getWarnings(values);
  }, [values, formWarningManager]);

  return warnings;
};

export default useWarnings;
