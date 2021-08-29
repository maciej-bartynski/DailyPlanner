import React, { useMemo } from 'react';
import { useFormikContext } from 'formik';
import {
    tFormProps,
    getFormContext,
    tMessagesManager,
} from './config';
import { useState, useEffect } from 'react';

function validationPlaceholder<FormType>(): Record<keyof FormType, string> {
    return {} as Record<keyof FormType, string>
};

function warningsPlaceholder<FormType> () {
    return {} as Record<(keyof (Partial<FormType>)), string>
}

const useWarnings = function <FormType>({
    values,
    warning,
}: {
    values: FormType;
    warning: tMessagesManager<FormType>
}) {
    const [warnings, setWarnings] = useState<Partial<Record<keyof FormType, string>>>(warningsPlaceholder<FormType>());

    useEffect(() => {
        async function getWarnings(valuesReceived: FormType) {
            const warns = await warning(valuesReceived);
            setWarnings(warns);
        }
        getWarnings(values);
    }, [values, warning]);

    return warnings;
};

const FormWarningLayer = function <FormType extends Record<string, unknown>>(props: tFormProps<FormType>) {
    const { warning = validationPlaceholder, children } = props;

    const formikData = useFormikContext<FormType>();
    const { values } = formikData;
    const warnings = useWarnings<FormType>({ values, warning });

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

export default FormWarningLayer;