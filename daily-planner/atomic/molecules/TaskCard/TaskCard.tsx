import React, {useCallback} from 'react';
import {View, Text} from 'react-native';
import useTasks from 'lib/hooks/useTasks';
import {modalNavigation} from 'lib/navigation';
import Button from '../../atoms/Button';
import {eButtonTitles} from 'lib/enums/strings';
import {eButtonVariant} from 'lib/enums/buttons';
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

  const deteleTask = useCallback(() => {
    methods.deleteTask(taskId);
  }, [taskId, methods]);

  const openModalCreateTask = useCallback(() => {
    modalNavigation.openModalCreateTask(taskId);
  }, [taskId]);

  const durationString = `${hours ? `${hours} h. ` : ''}${duration} min.`;
  return (
    <View style={styles.wrapper}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.duration}>{durationString}</Text>
      {description ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      <View style={styles.actions}>
        <Button
          variant={eButtonVariant.Primary}
          title={eButtonTitles.Edit}
          onPress={openModalCreateTask}
        />
        <Button
          variant={eButtonVariant.Tertiary}
          title={eButtonTitles.Delete}
          onPress={deteleTask}
        />
      </View>
    </View>
  );
};

export default TaskCard;
