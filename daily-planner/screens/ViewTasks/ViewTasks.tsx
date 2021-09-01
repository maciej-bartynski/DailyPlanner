import React, {useCallback} from 'react';
import {ViewsStackParamList} from 'lib/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {CreationPageTemplate} from 'atomic/templates/CreationPageTemplate';
import useTasks from 'lib/hooks/useTasks';
import TaskCard from 'atomic/molecules/TaskCard';
import {modalNavigation} from 'lib/navigation/navigate';
import {eViews} from 'lib/enums/screens';
import {
  cScreenTitles,
  eTasksViewBackgroundCommunicates,
} from 'lib/enums/strings';
import ViewTasksScrollView from './atoms/ScrollView';
import {eApiIssueSeverity} from 'api/types';

type ViewsScreensProps = RouteProp<ViewsStackParamList, eViews.Tasks>;

type ViewProp = {
  route: ViewsScreensProps;
};

const ViewTasks: React.FC<ViewProp> = () => {
  const {loading, severity, data } = useTasks();
  const {total, tasks} = data;

  const openModalCreateTask = useCallback(
    () => modalNavigation.openModalCreateTask(),
    [],
  );

  const hasError = severity === eApiIssueSeverity.Error;
  const isLoading = !total && loading;

  return (
    <CreationPageTemplate
      title={cScreenTitles[eViews.Tasks]}
      loading={isLoading ? eTasksViewBackgroundCommunicates.Loading : ''}
      error={hasError ? eTasksViewBackgroundCommunicates.Error : ''}
      data={!total ? eTasksViewBackgroundCommunicates.Data : ''}
      onCreatePressHandler={openModalCreateTask}>
      {tasks ? (
        <ViewTasksScrollView>
          {Object.values(tasks).map(task => {
            return (
              <TaskCard
                key={task._id}
                taskId={task._id}
                name={task.item.name}
                description={task.item.description}
                duration={+task.item.duration}
                createdAt={task._createdAt}
              />
            );
          })}
        </ViewTasksScrollView>
      ) : null}
    </CreationPageTemplate>
  );
};

ViewTasks.whyDidYouRender = {
  logOnDifferentValues: false,
};

export default ViewTasks;
