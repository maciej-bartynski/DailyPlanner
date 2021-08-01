import React, {useState} from 'react';
import {ModalsStackParamList} from 'lib/navigation/types';
import {RouteProp} from '@react-navigation/native';
import ModalBasicTemplate from 'atomic/templates/ModalBasicTemplate';
import useBoards from 'lib/hooks/useBoards';
import useTasks from 'lib/hooks/useTasks';
import {Pressable, GestureResponderEvent} from 'react-native';
import TimeRulerBoard from 'atomic/molecules/TimeRulerBoard';
import TasksPicker from 'atomic/molecules/TasksPicker';
import TaskBoardCard from 'atomic/molecules/TaskBoardCard';
import {MINUTES_PER_DAY, BOARD_HEIGHT_PX} from './config';
import {eModals} from 'lib/enums/screens';
import {cScreenTitles} from 'lib/enums/strings';

type ViewsScreensProps = RouteProp<ModalsStackParamList, eModals.ModalAddTasks>;

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
  const {tasks} = data;

  const [pressedLocation, setPressedLocation] = useState<number>();
  const [boardTasks, setBoardTasks] = useState<BoardTask[]>([]);
  const [scrollable, setScrollable] = useState<boolean>(true);

  const pressedTime =
    ((pressedLocation || 0) / BOARD_HEIGHT_PX) * MINUTES_PER_DAY;

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
    <ModalBasicTemplate
      title={`${cScreenTitles.ModalAddTasks} ${currentBoard?.title}`}>
      <TimeRulerBoard height={BOARD_HEIGHT_PX} scrollable={scrollable}>
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
            const task = tasks ? tasks[boardTask.taskId] : null;
            if (!task) {
              return null;
            }
            return (
              <TaskBoardCard
                key={task.id}
                task={task}
                boardTask={boardTask}
                onResponderEnd={() => {
                  setScrollable(true);
                }}
                onResponderStart={() => {
                  setScrollable(false);
                }}
                onTouchMoveCallback={() => {}}
                removeTaskFromBoard={removeTaskFromBoard}
                boardHeight={BOARD_HEIGHT_PX}
              />
            );
          })}
        </Pressable>
      </TimeRulerBoard>
      {pressedLocation ? (
        <TasksPicker
          cancelCallback={() => setPressedLocation(undefined)}
          tasks={Object.values(tasks || {})}
          addTaskToBoard={addTaskToBoard}
          pressedTime={pressedTime}
        />
      ) : null}
    </ModalBasicTemplate>
  );
};

export default ModalAddTasks;
