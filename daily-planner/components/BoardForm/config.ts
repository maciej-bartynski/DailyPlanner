import {FormikErrors} from 'formik';
import {iBoardFormCreate, iBoard} from 'lib/models/board';
import getBoards from 'api/boards/getBoards';

export enum eFormIssueSeverity {
  Warning = 'warning',
  Error = 'error',
}

export enum eBoardFormFieldNames {
  Title = 'title',
  Description = 'description',
  Tasks = 'tasks',
}

const MIN_BOARD_NAME_LEN = 4;
const MAX_BOARD_NAME_LEN = 30;
const MAX_BOARD_DESCRIPTION_LEN = 1000;

type tBoardAssignedTask = iBoard['tasks'][0];

export const BoardFormInitialValues: iBoardFormCreate = {
  [eBoardFormFieldNames.Title]: '',
  [eBoardFormFieldNames.Description]: '',
  [eBoardFormFieldNames.Tasks]: [] as tBoardAssignedTask[],
};

export enum eBoardFormIssueCode {
  NameToShort = 'NameToShort',
  NameToLong = 'NameToLong',
  NameExists = 'NameExists',
  DescriptionToLong = 'DescriptionToLong',
  NoTasksStillADraft = 'NoTasksStillADraft',
}

export const cBoardFormIssueMessage = {
  [eBoardFormIssueCode.NameToShort]: `Name should be at least ${MIN_BOARD_NAME_LEN} char. long.`,
  [eBoardFormIssueCode.NameToLong]: `Name should be at most ${MAX_BOARD_NAME_LEN} char. long.`,
  [eBoardFormIssueCode.NameExists]: 'This board title already exists.',
  [eBoardFormIssueCode.DescriptionToLong]: `Board description should be at most ${MAX_BOARD_DESCRIPTION_LEN} char. long.`,
  [eBoardFormIssueCode.NoTasksStillADraft]:
    "As long as board has no tasks assigned, it's a draft.",
};

export const cBoardFormIssuesSeverity = {
  [eBoardFormIssueCode.NameToShort]: eFormIssueSeverity.Error,
  [eBoardFormIssueCode.NameToLong]: eFormIssueSeverity.Error,
  [eBoardFormIssueCode.NameExists]: eFormIssueSeverity.Warning,
  [eBoardFormIssueCode.DescriptionToLong]: eFormIssueSeverity.Error,
  [eBoardFormIssueCode.NoTasksStillADraft]: eFormIssueSeverity.Warning,
};

export const valueCheckers = {
  [eBoardFormFieldNames.Title]: async function (
    value: string,
  ): Promise<null | eBoardFormIssueCode> {
    const response = await getBoards();
    const boardExists = Object.values(response.data || {}).find(
      board => board.title === value,
    );
    switch (true) {
      case value.length < MIN_BOARD_NAME_LEN: {
        return eBoardFormIssueCode.NameToShort;
      }
      case value.length > MAX_BOARD_NAME_LEN: {
        return eBoardFormIssueCode.NameToLong;
      }
      case !!boardExists: {
        return eBoardFormIssueCode.NameExists;
      }
      default: {
        return null;
      }
    }
  },
  [eBoardFormFieldNames.Tasks]: function (
    value?: tBoardAssignedTask[],
  ): null | eBoardFormIssueCode {
    switch (true) {
      case (!!value && value?.length) < 1 || !value: {
        return eBoardFormIssueCode.NoTasksStillADraft;
      }
      default: {
        return null;
      }
    }
  },
  [eBoardFormFieldNames.Description]: function (
    value?: string,
  ): null | eBoardFormIssueCode {
    switch (true) {
      case !!value && value.length > MAX_BOARD_DESCRIPTION_LEN: {
        return eBoardFormIssueCode.DescriptionToLong;
      }
      default: {
        return null;
      }
    }
  },
};

export const boardFormValidation = async (values: iBoardFormCreate) => {
  const errors: FormikErrors<Record<eBoardFormFieldNames, string>> = {};

  const titleValue = values[eBoardFormFieldNames.Title];
  const descriptionValue = values[eBoardFormFieldNames.Description];
  const tasksValue = values[eBoardFormFieldNames.Tasks];

  const titleIssueCode = await valueCheckers[eBoardFormFieldNames.Title](
    titleValue,
  );
  const descriptionIssueCode = await valueCheckers[
    eBoardFormFieldNames.Description
  ](descriptionValue);
  const tasksIssueCode = await valueCheckers[eBoardFormFieldNames.Tasks](
    tasksValue,
  );

  const issueCodes = [titleIssueCode, descriptionIssueCode, tasksIssueCode];
  const issueCodeFields = [
    eBoardFormFieldNames.Title,
    eBoardFormFieldNames.Description,
    eBoardFormFieldNames.Tasks,
  ];

  issueCodes.forEach((code, id) => {
    if (code && cBoardFormIssuesSeverity[code] === eFormIssueSeverity.Error) {
      errors[issueCodeFields[id]] = cBoardFormIssueMessage[code];
    }
  });

  return errors;
};

export const boardFormWarningManager = async (values: iBoardFormCreate) => {
  const errors: Partial<Record<keyof iBoardFormCreate, string>> = {};

  const titleValue = values[eBoardFormFieldNames.Title];
  const descriptionValue = values[eBoardFormFieldNames.Description];
  const tasksValue = values[eBoardFormFieldNames.Tasks];

  const titleIssueCode = await valueCheckers[eBoardFormFieldNames.Title](
    titleValue,
  );
  const descriptionIssueCode = await valueCheckers[
    eBoardFormFieldNames.Description
  ](descriptionValue);
  const durationIssueCode = await valueCheckers[eBoardFormFieldNames.Tasks](
    tasksValue,
  );

  const issueCodes = [titleIssueCode, descriptionIssueCode, durationIssueCode];
  const issueCodeFields = [
    eBoardFormFieldNames.Title,
    eBoardFormFieldNames.Description,
    eBoardFormFieldNames.Tasks,
  ];

  issueCodes.forEach((code, id) => {
    if (code && cBoardFormIssuesSeverity[code] === eFormIssueSeverity.Warning) {
      errors[issueCodeFields[id]] = cBoardFormIssueMessage[code];
    }
  });

  return errors;
};
