import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ViewsStackParamList} from 'lib/navigation/_types';
import {RouteProp} from '@react-navigation/native';
import {CreationPageTemplate} from 'atomic/templates/CreationPageTemplate';
import {navigation} from 'lib/navigation';
import {ScrollView} from 'react-native';
import {BoardCard} from 'atomic/atoms/BoardCard';
import useBoards from 'lib/storageAccess/boards';

type ViewsScreensProps = RouteProp<ViewsStackParamList, 'Boards'>;

type ViewProp = {
  route: ViewsScreensProps;
};

const Boards: React.FC<ViewProp> = () => {
  const {loading, error, data} = useBoards();

  const {total, boards} = data;

  return (
    <CreationPageTemplate
      title="Your boards"
      loading={loading ? 'Loading...' : ''}
      error={error ? "Sorry, I couldn't display your boards :C" : ''}
      data={!total ? "No boards! Why don't you create some, lazy?" : ''}
      onCreatePressHandler={navigation.openCreateBoard}>
      {total ? (
        <ScrollView style={styles.scrollView}>
          {Object.values(boards).map(board => {
            return (
              <View key={board.id} style={styles.taskWrapper}>
                <BoardCard
                  boardId={board.id}
                  title={board.title}
                  description={board.description}
                  tasksAmount={'' + board.tasks.length}
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

export default Boards;
