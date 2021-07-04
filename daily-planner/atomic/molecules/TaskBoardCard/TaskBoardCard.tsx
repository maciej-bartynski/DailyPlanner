import React, {useRef} from 'react';
import {
  StyleSheet,
  Animated,
  Pressable,
  GestureResponderEvent,
  Text,
  Button,
  View,
} from 'react-native';
import {iTask} from 'lib/models/task';
import {mixins} from 'lib/styles/fonts';

type BoardTask = {
  taskId: string;
  location: number;
};

const MINUTES_PER_DAY = 1440;

type Props = {
  task: iTask;
  boardTask: BoardTask;
  onResponderStart: () => void;
  onResponderEnd: () => void;
  onTouchMoveCallback: (touch: GestureResponderEvent['nativeEvent']) => void;
  removeTaskFromBoard: (taskId: string) => void;
  boardHeight?: number;
};

const TaskBoardCard: React.FC<Props> = ({
  task,
  boardTask,
  onResponderEnd,
  onResponderStart,
  onTouchMoveCallback,
  removeTaskFromBoard,
  boardHeight = 1440,
}) => {
  const initialHeight = (boardHeight / MINUTES_PER_DAY) * task.duration;

  const moveStartRef = useRef<number>(boardTask.location || 0);
  const moveEndRef = useRef<number>(boardTask.location || 0);
  const pageStartRef = useRef<number>(0);
  const animationRef = useRef(new Animated.Value(boardTask.location || 0));

  const expandTouchStartRef = useRef<number>(0);
  const currentHeightRef = useRef<number>(initialHeight);
  const expandTouchEndRef = useRef<number>(initialHeight);
  const animationExpandRef = useRef(new Animated.Value(initialHeight));

  return (
    <Animated.View style={[styles.taskBoardCard, {top: animationRef.current}]}>
      <Pressable
        onTouchStart={(e: GestureResponderEvent) => {
          onResponderStart();
          pageStartRef.current = e.nativeEvent.pageY;
        }}
        onTouchEnd={(e: GestureResponderEvent) => {
          onResponderEnd();
          moveStartRef.current = moveEndRef.current;
        }}
        onTouchMove={(e: GestureResponderEvent) => {
          onTouchMoveCallback(e.nativeEvent);
          moveEndRef.current =
            moveStartRef.current + (e.nativeEvent.pageY - pageStartRef.current);
          animationRef.current.setValue(moveEndRef.current);
        }}
        style={styles.taskBoardCard__content}>
        <Animated.View
          style={[
            styles.taskBoardCard__leftCol,
            {height: animationExpandRef.current},
          ]}>
          <Pressable
            style={styles.taskBoardCard__expander}
            onResponderStart={() => true}
            onTouchStart={(e: GestureResponderEvent) => {
              e.stopPropagation();
              onResponderStart();
              expandTouchStartRef.current = e.nativeEvent.pageY;
            }}
            onTouchEnd={(e: GestureResponderEvent) => {
              e.stopPropagation();
              onResponderEnd();
              const movedBy =
                expandTouchEndRef.current - expandTouchStartRef.current;
              const newHeight = currentHeightRef.current + movedBy;
              currentHeightRef.current = newHeight;
            }}
            onTouchMove={(e: GestureResponderEvent) => {
              e.stopPropagation();
              onTouchMoveCallback(e.nativeEvent);
              expandTouchEndRef.current = e.nativeEvent.pageY;
              const movedBy =
                expandTouchEndRef.current - expandTouchStartRef.current;
              const newHeight = currentHeightRef.current + movedBy;
              animationExpandRef.current.setValue(newHeight);
            }}
          />
        </Animated.View>
        <View style={styles.taskBoardCard__rightCol}>
          <Text style={styles.taskBoardCard__title}>{task.name}</Text>
          <View style={styles.taskBoardCard__btn}>
            <Button
              title="x"
              onPress={() => {
                removeTaskFromBoard(task.id);
              }}
            />
          </View>
        </View>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  taskBoardCard: {
    width: '100%',
    position: 'absolute',
    left: 0,
  },
  taskBoardCard__content: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  taskBoardCard__expander: {
    width: '100%',
    height: 10,
    backgroundColor: 'red',
  },
  taskBoardCard__leftCol: {
    width: 100,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  taskBoardCard__rightCol: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 5,
  },
  taskBoardCard__title: {
    ...mixins.label,
  },
  taskBoardCard__btn: {
    paddingVertical: 5,
  },
});

export default TaskBoardCard;
