import React, { useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import { ViewsStackParamList } from 'lib/navigation/types';
import { RouteProp } from '@react-navigation/native';
import { CreationPageTemplate } from 'atomic/templates/CreationPageTemplate';
import useTasks from 'lib/storageAccess/tasks';
import { ScrollView } from 'react-native';
import { TaskCard } from 'atomic';
import { modalNavigation } from 'lib/navigation/navigate';
import { eViews } from 'lib/enums/screens';
import { cScreenTitles, eTasksViewBackgroundCommunicates } from 'lib/enums/strings';

type ViewsScreensProps = RouteProp<ViewsStackParamList, eViews.Tasks>;

type ViewProp = {
  route: ViewsScreensProps;
};

const ViewTasks: React.FC<ViewProp> = () => {
  const { loading, error, data } = useTasks();
  const { total, tasks } = data;

  const openModalCreateTask = useCallback(() => modalNavigation.openModalCreateTask(), [])

  return (
    <CreationPageTemplate
      title={cScreenTitles[eViews.Tasks]}
      loading={loading ? eTasksViewBackgroundCommunicates.Loading : ''}
      error={error ? eTasksViewBackgroundCommunicates.Error : ''}
      data={!total ? eTasksViewBackgroundCommunicates.Data : ''}
      onCreatePressHandler={openModalCreateTask}
    >
      {total ? (
        <ScrollView style={styles.scrollView}>
          {Object.values(tasks).map(task => {
            return (
              <View key={task.id} style={styles.taskWrapper}>
                <TaskCard
                  taskId={task.id}
                  name={task.name}
                  description={task.description}
                  duration={'' + task.duration}
                />
              </View>
            );
          })}
        </ScrollView>
      ) : null}
    </CreationPageTemplate>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    paddingBottom: 5,
  },
  scrollView: {
    width: '100%',
    padding: 10,
  },
});

export default ViewTasks;
