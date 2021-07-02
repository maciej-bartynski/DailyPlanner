import React, {useState} from 'react';
import {ModalsStackParamList} from 'lib/navigation/_types';
import {RouteProp} from '@react-navigation/native';
import {ModalBasicTemplate} from 'atomic/templates/ModalBasicTemplate';
import BoardForm from 'components/BoardForm';
import useBoards from 'lib/storageAccess/boards';
import useTasks from 'lib/storageAccess/tasks';
import {
  View,
  Text,
  Button,
  Pressable,
  GestureResponderEvent,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import TimeRulerBoard from 'atomic/molecules/TimeRulerBoard';
import TasksPicker from 'atomic/molecules/TasksPicker';

const MINUTES_PER_DAY = 1440;
const BOARD_HEIGHT_PX = 1440;

type ViewsScreensProps = RouteProp<ModalsStackParamList, 'ModalAddTasks'>;

type BoardTask = {
  taskId: string;
  location: number;
};

type ViewProp = {
  route: ViewsScreensProps;
};

const ModalAddTasks: React.FC<ViewProp> = ({route}) => {
  const {boardId} = route.params;
  const {methods} = useBoards();
  const currentBoard = methods.getBoard(boardId || '');
  const {data} = useTasks();
  const {tasks, total} = data;

  const [pressedLocation, setPressedLocation] = useState<number>();
  const [boardTasks, setBoardTasks] = useState<BoardTask[]>([]);

  const addTaskToBoard = (taskId: string) => {
    setBoardTasks(
      [...boardTasks]
        .concat([
          {
            taskId,
            location: pressedLocation || 0,
          },
        ])
        .sort((itemA, itemB) => itemA.location - itemB.location),
    );
  };

  const removeTaskFromBoard = (taskId: string) => {
    setBoardTasks(
      [...boardTasks].filter(boardTask => boardTask.taskId !== taskId),
    );
  };

  return (
    <ModalBasicTemplate title={`Add tasks to board ${currentBoard?.title}`}>
      <TimeRulerBoard height={BOARD_HEIGHT_PX}>
        <Pressable
          style={{
            height: '100%',
            width: '100%',
          }}
          onLongPress={(e: GestureResponderEvent) => {
            const {locationY} = e.nativeEvent;
            setPressedLocation(locationY);
          }}>
          {boardTasks.map(boardTask => {
            const task = tasks[boardTask.taskId];
            return (
              <View
                style={{
                  position: 'absolute',
                  left: 0,
                  top: boardTask.location,
                  width: '100%',
                  borderWidth: 1,
                  borderRadius: 5,
                  borderColor: 'red',
                  height: (BOARD_HEIGHT_PX / MINUTES_PER_DAY) * task.duration,
                }}>
                <Text>{task.name}</Text>
                <Button
                  title="x"
                  onPress={() => {
                    removeTaskFromBoard(task.id);
                  }}
                />
              </View>
            );
          })}
        </Pressable>
      </TimeRulerBoard>
      {pressedLocation ? (
        <TasksPicker
          cancelCallback={() => setPressedLocation(undefined)}
          tasks={Object.values(tasks)}
          addTaskToBoard={addTaskToBoard}
        />
      ) : null}
    </ModalBasicTemplate>
  );
};

export default ModalAddTasks;
