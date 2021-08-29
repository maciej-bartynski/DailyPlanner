export enum eFormIssueSeverity {
    Warning = 'warning',
    Error = 'error',
    None = 'none'
}

export type tFieldWarnings<FormContextType> = Record<keyof FormContextType, string>;
export type tFieldValues<FormContextType> = Record<keyof FormContextType, string>;
