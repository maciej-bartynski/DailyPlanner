import { tasksStorage } from "./tasksStorage";
import { cTasksIssueMessage, eTasksIssueCode, cTasksIssueSeverity, eTasksIssueMessage } from "./tasksIssues";
import { iEndpointReturnType } from "api/types";

type tDeleteTask = (id: string) => Promise<iEndpointReturnType<eTasksIssueMessage, null>>;

const deleteTask: tDeleteTask = async (id) => {
    const [errorMessage] = await tasksStorage.delItem(id);

    const issueType = errorMessage
        ? eTasksIssueCode.InternalStorageError
        : eTasksIssueCode.StatusOk

    const message = issueType && cTasksIssueMessage[issueType];
    const severity = issueType && cTasksIssueSeverity[issueType];

    return {
        data: null,
        message,
        severity,
    }
}

export default deleteTask;