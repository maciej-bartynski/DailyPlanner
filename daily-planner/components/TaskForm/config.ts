import {iTaskFormCreate} from 'lib/models/task';
import {FormikErrors} from 'formik';
import getTasks from '../../api/tasks/getTasks';

export enum eFormIssueSeverity {
  Warning = 'warning',
  Error = 'error',
}

export enum eTaskFormFieldNames {
  Name = 'name',
  Description = 'description',
  Duration = 'duration',
  Hours = 'hours',
}

const MIN_TASK_NAME_LEN = 4;
const MAX_TASK_NAME_LEN = 30;
const MIN_TASK_DURATION = 1;
const MAX_TASK_DURATION = 60 * 24;
const MAX_TASK_DESCRIPTION_LEN = 1000;

export const TaskFormInitialValues: iTaskFormCreate = {
  [eTaskFormFieldNames.Name]: '',
  [eTaskFormFieldNames.Description]: '',
  [eTaskFormFieldNames.Duration]: 20,
  [eTaskFormFieldNames.Hours]: 0,
};

export enum eTaskFormIssueCode {
  NameToShort = 'NameToShort',
  NameToLong = 'NameToLong',
  NameExists = 'NameExists',
  DescriptionToLong = 'DescriptionToLong',
  DurationToLow = 'DurationToLow',
  DurationToHight = 'DurationToHight',
  DurationInvalidFormat = 'DurationInvalidFormat',
  DurationBadToHandle = 'DurationBadToHandle',
}

export const cTaskFormIssueMessage = {
  [eTaskFormIssueCode.NameToShort]: `Name should be at least ${MIN_TASK_NAME_LEN} char. long.`,
  [eTaskFormIssueCode.NameToLong]: `Name should be at most ${MAX_TASK_NAME_LEN} char. long.`,
  [eTaskFormIssueCode.NameExists]: 'This task name already exists.',
  [eTaskFormIssueCode.DescriptionToLong]: `Task description should be at most ${MAX_TASK_DESCRIPTION_LEN} char. long.`,
  [eTaskFormIssueCode.DurationToLow]: `Min. task duration is ${MIN_TASK_DURATION} minute(s).`,
  [eTaskFormIssueCode.DurationToHight]: `Max. task duration is ${MAX_TASK_DURATION} minutes.`,
  [eTaskFormIssueCode.DurationInvalidFormat]: 'Only whole numbers are allowed.',
  [eTaskFormIssueCode.DurationBadToHandle]:
    'During task execution with such a short duration, managing timer in application can possibly extend time. Consider usage at least 5 min tasks, and leave shortening to app itself.',
};

export const cTaskFormIssuesSeverity = {
  [eTaskFormIssueCode.NameToShort]: eFormIssueSeverity.Error,
  [eTaskFormIssueCode.NameToLong]: eFormIssueSeverity.Error,
  [eTaskFormIssueCode.NameExists]: eFormIssueSeverity.Warning,
  [eTaskFormIssueCode.DescriptionToLong]: eFormIssueSeverity.Error,
  [eTaskFormIssueCode.DurationToLow]: eFormIssueSeverity.Error,
  [eTaskFormIssueCode.DurationToHight]: eFormIssueSeverity.Error,
  [eTaskFormIssueCode.DurationInvalidFormat]: eFormIssueSeverity.Error,
  [eTaskFormIssueCode.DurationBadToHandle]: eFormIssueSeverity.Warning,
};

export const valueCheckers = {
  [eTaskFormFieldNames.Name]: async function (
    value: string,
  ): Promise<null | eTaskFormIssueCode> {
    const response = await getTasks();
    const taskExists = Object.values(response.data || {}).find(
      task => task.name === value,
    );
    switch (true) {
      case value.length < MIN_TASK_NAME_LEN: {
        return eTaskFormIssueCode.NameToShort;
      }
      case value.length > MAX_TASK_NAME_LEN: {
        return eTaskFormIssueCode.NameToLong;
      }
      case !!taskExists: {
        return eTaskFormIssueCode.NameExists;
      }
      default: {
        return null;
      }
    }
  },
  [eTaskFormFieldNames.Duration]: function (
    value: number,
  ): null | eTaskFormIssueCode {
    switch (true) {
      case value < MIN_TASK_DURATION: {
        return eTaskFormIssueCode.DurationToLow;
      }
      case value > MAX_TASK_DURATION: {
        return eTaskFormIssueCode.DurationToHight;
      }
      case value < 5: {
        return eTaskFormIssueCode.DurationBadToHandle;
      }
      default: {
        return null;
      }
    }
  },
  [eTaskFormFieldNames.Description]: function (
    value?: string,
  ): null | eTaskFormIssueCode {
    switch (true) {
      case !!value && value.length > MAX_TASK_DESCRIPTION_LEN: {
        return eTaskFormIssueCode.DescriptionToLong;
      }
      default: {
        return null;
      }
    }
  },
};

export const taskFormValidation = async (values: iTaskFormCreate) => {
  const errors: FormikErrors<Record<eTaskFormFieldNames, string>> = {};

  const nameValue = values[eTaskFormFieldNames.Name];
  const durationValue = values[eTaskFormFieldNames.Duration];
  const descriptionValue = values[eTaskFormFieldNames.Description];

  const nameIssueCode = await valueCheckers[eTaskFormFieldNames.Name](
    nameValue,
  );
  const descriptionIssueCode = await valueCheckers[
    eTaskFormFieldNames.Description
  ](descriptionValue);
  const durationIssueCode = await valueCheckers[eTaskFormFieldNames.Duration](
    durationValue,
  );

  const issueCodes = [nameIssueCode, descriptionIssueCode, durationIssueCode];
  const issueCodeFields = [
    eTaskFormFieldNames.Name,
    eTaskFormFieldNames.Description,
    eTaskFormFieldNames.Duration,
  ];

  issueCodes.forEach((code, id) => {
    if (code && cTaskFormIssuesSeverity[code] === eFormIssueSeverity.Error) {
      errors[issueCodeFields[id]] = cTaskFormIssueMessage[code];
    }
  });

  return errors;
};

export const taskFormWarningManager = async (values: iTaskFormCreate) => {
  const errors: Partial<Record<keyof iTaskFormCreate, string>> = {};

  const nameValue = values[eTaskFormFieldNames.Name];
  const durationValue = values[eTaskFormFieldNames.Duration];
  const descriptionValue = values[eTaskFormFieldNames.Description];

  const nameIssueCode = await valueCheckers[eTaskFormFieldNames.Name](
    nameValue,
  );
  const descriptionIssueCode = await valueCheckers[
    eTaskFormFieldNames.Description
  ](descriptionValue);
  const durationIssueCode = await valueCheckers[eTaskFormFieldNames.Duration](
    durationValue,
  );

  const issueCodes = [nameIssueCode, descriptionIssueCode, durationIssueCode];
  const issueCodeFields = [
    eTaskFormFieldNames.Name,
    eTaskFormFieldNames.Description,
    eTaskFormFieldNames.Duration,
  ];

  issueCodes.forEach((code, id) => {
    if (code && cTaskFormIssuesSeverity[code] === eFormIssueSeverity.Warning) {
      errors[issueCodeFields[id]] = cTaskFormIssueMessage[code];
    }
  });

  return errors;
};
