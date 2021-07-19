import { tFormFieldStylesheetType } from "atomic/molecules/FormField/FormField.styles";

const formFieldStyles: Partial<tFormFieldStylesheetType> = {
    fieldLabel: { display: 'none' },
    fieldError: { display: 'none' },
    fieldWrapper: { padding: 0, margin: 0 },
    fieldWarning: { display: 'none' }
}

export default formFieldStyles;