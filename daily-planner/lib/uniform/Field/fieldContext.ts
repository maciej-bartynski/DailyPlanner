import { createContext, useContext } from "react";
import { FormikContextType, FormikErrors } from "formik";
import { tFieldName, tFieldValues, tFieldWarnings } from "../types";

interface iFieldContext<FormContextType> {
    value: tFieldValues<FormContextType>[keyof FormContextType],
    error: FormikErrors<FormContextType>[keyof FormContextType],
    warning: tFieldWarnings<FormContextType>[keyof FormContextType],
    onBlurHandler: (e:any) => void,
    onChangeHandler: (e:any) => void,
}

const CONTEXT_TEMPLATE: unknown = {
    value: null,
    error: "",
    warning: "",
    onBlurHandler: () => { },
    onChangeHandler: () => { },
}

export const FieldContext = createContext(CONTEXT_TEMPLATE);

function useFieldContext<FormContextType>() {
    return useContext(FieldContext as React.Context<iFieldContext<FormContextType>>);
}

export default useFieldContext;