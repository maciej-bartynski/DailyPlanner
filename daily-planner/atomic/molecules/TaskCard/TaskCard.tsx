import React, { useCallback, useMemo } from 'react';
import useTasks from 'lib/hooks/useTasks';
import { modalNavigation } from 'lib/navigation';
import { eButtonTitles } from 'lib/enums/strings';
import { eButtonVariant } from 'lib/enums/buttons';
import Card from '../Card';
import { View } from 'react-native';
import styles from './TaskCard.styles';

type Props = {
  name: string;
  description?: string;
  duration?: number;
  taskId: string;
  hours?: number;
};

const TaskCard: React.FC<Props> = props => {
  const { name, description, duration, taskId } = props;
  const { methods } = useTasks();

  const deleteTask = useCallback(() => {
    methods.deleteTask(taskId);
  }, [taskId, methods]);

  const openModalTaskDetail = useCallback(() => {
    modalNavigation.openModalTaskDetail(taskId);
  }, [taskId]);

  const durationString = `${duration} min.`;

  const actions = useMemo(
    () => [
      {
        variant: eButtonVariant.Primary,
        label: eButtonTitles.Edit,
        onPress: openModalTaskDetail,
      },
      {
        variant: eButtonVariant.Tertiary,
        label: eButtonTitles.Delete,
        onPress: deleteTask,
      },
    ],
    [openModalTaskDetail, deleteTask],
  );

  return (
    <>

      <Card
        createdAt={'21.02.1990'}
        title={name}
        extraInfo={[`Duration: ${durationString}`, 'Created: 12.12.1919']}
        description={description}
        onPress={openModalTaskDetail}
      />

    </>
  );
};

export default TaskCard;
