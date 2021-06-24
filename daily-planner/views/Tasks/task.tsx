import React from 'react';
import PageLayout from 'components/PageLayout';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ViewsStackParamList } from 'lib/navigation/_types';
import { RouteProp } from '@react-navigation/native';
import { CreationPageTemplate } from 'atomic/templates/CreationPageTemplate';
import useTasks from 'lib/storageAccess/tasks';
import { navigation } from 'lib/navigation';
import { eColors } from 'lib/styles/colors';
import { ScrollView } from 'react-native';
import { TaskCard } from 'atomic';

type ViewsScreensProps = RouteProp<ViewsStackParamList, 'Tasks'>;

type ViewProp = {
  route: ViewsScreensProps;
};

const Task: React.FC<ViewProp> = ({ route }) => {

  const {
    loading,
    error,
    data,
  } = useTasks();

  const {
    total,
    tasks,
  } = data;

  return (
    <CreationPageTemplate
      title="Your tasks"
      loading={loading ? "Loading..." : ""}
      error={error ? "Sorry, I couldn't display your tasks :C" : ""}
      data={!total ? "No tasks! Why don't you create some, lazy?" : ""}
      onCreatePressHandler={navigation.openCreateTask}
    >
      {total
        ? (
          <ScrollView style={styles.scrollView}>
            {
              Object.values(tasks).map(task => {
                return (
                  <View
                    key={task.id}
                    style={styles.taskWrapper}
                  >
                    <TaskCard
                      taskId={task.id}
                      name={task.name}
                      description={task.description}
                      duration={"" + task.duration}
                    />
                  </View>
                )
              })
            }
          </ScrollView>
        )
        : null
      }
    </CreationPageTemplate>
  );
};

const styles = StyleSheet.create({
  taskWrapper: {
    paddingBottom: 5,
  },
  scrollView: {
    width: "100%", 
    padding: 10
  }
})

export default Task;
