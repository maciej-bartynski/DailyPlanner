import React from 'react';
import PageLayout from 'components/PageLayout';
import { StyleSheet, Text, View, Button } from 'react-native';
import { ViewsStackParamList } from 'lib/navigation/_types';
import { RouteProp } from '@react-navigation/native';
import CreationPageTemplate from 'atomic/templates/CreationPageTemplate';
import useTasks from 'lib/storageAccess/tasks';
import { navigation } from 'lib/navigation';
import { eColors } from 'lib/styles/colors';
import { ScrollView } from 'react-native-gesture-handler';

type ViewsScreensProps = RouteProp<ViewsStackParamList, 'Tasks'>;

type ViewProp = {
  route: ViewsScreensProps;
};

const Task: React.FC<ViewProp> = ({ route }) => {

  const {
    loading,
    error,
    data,
    methods
  } = useTasks();

  const {
    total,
    active,
    tasks,
    current
  } = data;

  return (
    <CreationPageTemplate
      loading={loading ? "Loading..." : ""}
      error={error ? "Sorry, I couldn't display your tasks :C" : ""}
      data={!total ? "No tasks! Why don't you create some, lazy?" : ""}
      bgColor={eColors.primary}
      onCreatePressHandler={navigation.openCreateTask}
    >
      {total
        ? (<ScrollView style={{ width: "100%", padding: 20 }}>
          {
            Object.values(tasks).map(task => {
              return (
                <View key={task.id} style={{
                  padding: 10,
                  margin: 1,
                  borderWidth: 1,
                }}>

                  <Text>
                    {task.name}
                  </Text>
                  <Text>
                    {task.description}
                  </Text>
                  <Text>
                    {task.duration}
                  </Text>

                  <Button title="remove" onPress={() => {
                    methods.deleteTask(task.id)
                  }} />
                </View>
              )
            })
          }
        </ScrollView>
        ) : null}
    </CreationPageTemplate>
  );
};

export default Task;
