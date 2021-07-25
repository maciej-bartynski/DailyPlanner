export interface iEndpointReturnType<MessageType, DataType> {
    severity: eApiIssueSeverity,
    message: MessageType,
    data: DataType | null
}

export enum eApiIssueSeverity {
    Error = 'Error',
    Warning = 'Warning',
    Info = 'Info',
    Success = 'Success'
}