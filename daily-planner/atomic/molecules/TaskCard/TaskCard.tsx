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
  const { name, description, duration, taskId, hours } = props;
  const { methods } = useTasks();

  const deleteTask = useCallback(() => {
    methods.deleteTask(taskId);
  }, [taskId, methods]);

  const openModalTaskDetail = useCallback(() => {
    modalNavigation.openModalTaskDetail(taskId);
  }, [taskId]);

  const durationString = `${hours ? `${hours} h. ` : ''}${duration} min.`;

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


      <Card
        createdAt={'21.02.1990'}
        title={'A very long task title to show and etc ofc! So what to name it?'}
        extraInfo={[`Duration: ${durationString}`, 'Created: 12.12.1919']}
        description={'Description is very long, mamamama asdfasdflk aslfh laskhf gklsdjfg hksdjh gksdjf g And this is the end i thing. OR maybe not? Who knows? WHO KNOWS?!?!?!'}
        onPress={openModalTaskDetail}
      />


      <Card
        createdAt={'21.02.1990'}
        title={'A very long task title to show and etc ofc! So what to name it?'}
        extraInfo={[`Duration: ${durationString}`, 'Created: 12.12.1919']}
        description={'Descriptiows? WHO KNOWS?!?!?!'}
        onPress={openModalTaskDetail}
      />


      <Card
        createdAt={'21.02.1990'}
        title={'A very long task title to show and etc ofc! So what to name it?'}
        extraInfo={[`Duration: ${durationString}`, 'Created: 12.12.1919']}
        description={'Description is very long, mamamama asdfasdflk aslfh laskhf gklsdjfg hksdjh gksdjf g And this is the end i thing. OR maybe not? Who knows? WHO KNOWS?!?!?!'}
        onPress={openModalTaskDetail}
      />


      <Card
        createdAt={'21.02.1990'}
        title={'A very long task title to show and etc ofc! So what to name it?'}
        extraInfo={[`Duration: ${durationString}`, 'Created: 12.12.1919']}
        description={'Description is very loni thing. OR maybe not? Who knows? WHO KNOWS?!?!?!'}
        onPress={openModalTaskDetail}
      />


      <Card
        createdAt={'21.02.1990'}
        title={'A very long task title to show and etc ofc! So what to name it?'}
        extraInfo={[`Duration: ${durationString}`, 'Created: 12.12.1919']}
        description={'Description is very long, mamamama asdfasdflk aslfh laskhf gklsdjfg hksdjh gksdjf g And this is the end i thing. OR maybe not? Who knows? WHO KNOWS?!?!?!'}
        onPress={openModalTaskDetail}
      />

    </>
  );
};

export default TaskCard;
