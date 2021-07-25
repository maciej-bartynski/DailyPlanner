import { eApiIssueSeverity } from "api/types"

export enum eTasksIssueCode {
    NoDataFound = 'NoDataFound',
    InternalStorageError = 'InternalStorageError',
    StatusOk = 'StatusOk'
}

export enum eTasksIssueMessage {
    NoDataFound = 'No tasks to show. Create some, You lazyling!',
    InternalStorageError = 'I couldn\'t get into Your phone memory... Something went wrong :C',
    StatusOk = ''
}

export const cTasksIssueSeverity = {
    [eTasksIssueCode.NoDataFound]: eApiIssueSeverity.Info,
    [eTasksIssueCode.InternalStorageError]: eApiIssueSeverity.Error, 
    [eTasksIssueCode.StatusOk]: eApiIssueSeverity.Success,
}

export const cTasksIssueMessage = {
    [eTasksIssueCode.NoDataFound]: eTasksIssueMessage.NoDataFound,
    [eTasksIssueCode.InternalStorageError]: eTasksIssueMessage.InternalStorageError,
    [eTasksIssueCode.StatusOk]: eTasksIssueMessage.StatusOk
}
