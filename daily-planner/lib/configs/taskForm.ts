import {eFieldType} from 'lib/enums/forms';
import {tasksStorage} from 'lib/storageAccess/tasks/useTasks';
import {iTask} from 'lib/models/task';

const NAME_LEN_MIN = 4;
const NAME_LEN_MAX = 30;
const DESCRIPTION_LEN_MAX = 600;
const DURATION_MIN = 1;
const DURATION_MAX = 60 * 24;

enum eTaskNameError {
  fieldRequired = "Field 'name' is required.",
  fieldToLong = 'Name should be max. 30 char. length.',
  fieldToShort = 'Name should be at least. 3 char. length',
}

enum eTaskDescriptionError {
  fieldToLong = 'Name should be max. 600 char. length.',
}

enum eTaskDurationError {
  fieldToLow = 'Task should last at least 1 minute.',
  fieldToHigh = 'Task should last max. 24 hours',
  fieldOnlyMinutes = 'Task lenght must be expressed in minutes',
}

enum eTaskNameWarning {
  nameExists = 'Task with this name already exists.',
}

export const fieldNameValidator = (name: string) => {
  switch (true) {
    case name.trim().length < NAME_LEN_MIN: {
      return eTaskNameError.fieldToShort;
    }
    case name.trim().length > NAME_LEN_MAX: {
      return eTaskNameError.fieldToLong;
    }
    case name.trim().length === 0: {
      return eTaskNameError.fieldRequired;
    }
    default: {
      return '';
    }
  }
};

export const fieldNameWarningChecker = async (name: string) => {
  const allTasks = await tasksStorage.getAll<iTask>();
  const exists = !!Object.values(allTasks || {}).find(
    item => item.name === name,
  );
  return exists ? eTaskNameWarning.nameExists : '';
};

export const fieldDescriptionValidator = (name: string) => {
  switch (true) {
    case name.trim().length > DESCRIPTION_LEN_MAX: {
      return eTaskDescriptionError.fieldToLong;
    }
    default: {
      return '';
    }
  }
};

export const fieldDurationValidator = (duration: number) => {
  switch (true) {
    case duration < DURATION_MIN: {
      return eTaskDurationError.fieldToLow;
    }

    case duration > DURATION_MAX: {
      return eTaskDurationError.fieldToHigh;
    }

    case duration - Math.floor(duration) !== 0: {
      return eTaskDurationError.fieldOnlyMinutes;
    }

    default: {
      return '';
    }
  }
};

const taskFormFieldConfig = [
  {
    name: 'name',
    type: eFieldType.TextInput,
    value: 'string',
    validator: fieldNameValidator,
    warningValidator: fieldNameWarningChecker,
  },
  {
    name: 'description',
    type: eFieldType.TextArea,
    value: 'string',
    validator: fieldDescriptionValidator,
  },
  {
    name: 'duration',
    type: eFieldType.ValueSlider,
    value: 'number',
    validator: fieldDurationValidator,
  },
];

export default taskFormFieldConfig;
