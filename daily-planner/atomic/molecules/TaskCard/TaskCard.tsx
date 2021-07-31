import React, {useCallback, useMemo} from 'react';
import useTasks from 'lib/hooks/useTasks';
import {modalNavigation} from 'lib/navigation';
import {eButtonTitles} from 'lib/enums/strings';
import {eButtonVariant} from 'lib/enums/buttons';
import Card from '../Card';
import {View} from 'react-native';
import styles from './TaskCard.styles';

type Props = {
  name: string;
  description?: string;
  duration?: number;
  taskId: string;
  hours?: number;
};

const TaskCard: React.FC<Props> = props => {
  const {name, description, duration, taskId, hours} = props;
  const {methods} = useTasks();

  const deleteTask = useCallback(() => {
    methods.deleteTask(taskId);
  }, [taskId, methods]);

  const openModalCreateTask = useCallback(() => {
    modalNavigation.openModalCreateTask(taskId);
  }, [taskId]);

  const durationString = `${hours ? `${hours} h. ` : ''}${duration} min.`;

  const actions = useMemo(
    () => [
      {
        variant: eButtonVariant.Primary,
        label: eButtonTitles.Edit,
        onPress: openModalCreateTask,
      },
      {
        variant: eButtonVariant.Tertiary,
        label: eButtonTitles.Delete,
        onPress: deleteTask,
      },
    ],
    [openModalCreateTask, deleteTask],
  );

  return (
    <View style={styles.wrapper}>
      <Card
        title={name}
        extraInfo={[durationString]}
        description={description}
        actions={actions}
      />
    </View>
  );
};

export default TaskCard;
