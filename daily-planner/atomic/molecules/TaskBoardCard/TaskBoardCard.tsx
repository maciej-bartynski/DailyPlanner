import React, {useRef, useCallback, useState} from 'react';
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
import {
  MINUTES_PER_DAY,
  MIN_TO_PX,
  BOARD_HEIGHT_PX,
} from 'views/ModalAddTasks/config';

type BoardTask = {
  taskId: string;
  location: number;
};

type Props = {
  task: iTask;
  boardTask: BoardTask;
  onResponderStart: () => void;
  onResponderEnd: () => void;
  onTouchMoveCallback: (touch: GestureResponderEvent['nativeEvent']) => void;
  removeTaskFromBoard: (taskId: string) => void;
  boardHeight?: number;
};

function locationToStartDate({location}: {location: number}) {
  const locationToMins = location / MIN_TO_PX;
  const minutesToHours = locationToMins / 60;
  const hours = Math.floor(minutesToHours);
  const mins = (locationToMins - hours * 60).toFixed(0);
  const displayHours = `${hours.toString().length < 2 ? '0' : ''}${hours}`;
  const displayMins = `${mins.toString().length < 2 ? '0' : ''}${mins}`;
  return `${displayHours}:${displayMins}`;
}

const TaskBoardCard: React.FC<Props> = ({
  task,
  boardTask,
  onResponderEnd,
  onResponderStart,
  onTouchMoveCallback,
  removeTaskFromBoard,
  boardHeight = BOARD_HEIGHT_PX,
}) => {
  const initialHeight = (boardHeight / MINUTES_PER_DAY) * task.duration;
  const [toDelete, suggestDelete] = useState(false);
  /* moving */
  const moveStartRef = useRef<number>(boardTask.location || 0);
  const moveEndRef = useRef<number>(boardTask.location || 0);
  const pageStartRef = useRef<number>(0);
  const animationRef = useRef(new Animated.Value(boardTask.location || 0));

  const onMoveStart = useCallback(
    (e: GestureResponderEvent) => {
      e.stopPropagation();
      onResponderStart();
      pageStartRef.current = e.nativeEvent.pageY;
      removeTaskOnGestureStart(e);
    },
    [onResponderStart, pageStartRef],
  );

  const onMove = useCallback(
    (e: GestureResponderEvent) => {
      e.stopPropagation();
      onTouchMoveCallback(e.nativeEvent);
      moveEndRef.current =
        moveStartRef.current + (e.nativeEvent.pageY - pageStartRef.current);
      animationRef.current.setValue(moveEndRef.current);

      const expandHandlerNewTop = currentHeightRef.current + moveEndRef.current;
      expandTopPositionRef.current.setValue(expandHandlerNewTop - 30);

      removeTaskOnGestureMove(e);
    },
    [onTouchMoveCallback, animationRef, moveEndRef, pageStartRef],
  );

  const onMoveEnd = useCallback(
    (e: GestureResponderEvent) => {
      e.stopPropagation();
      onResponderEnd();
      moveStartRef.current = moveEndRef.current;

      removeTaskOnGestureEnd(e);
    },
    [onResponderEnd, moveStartRef, moveEndRef],
  );

  /*expanding */
  const expandTouchStartRef = useRef<number>(0);
  const currentHeightRef = useRef<number>(initialHeight);
  const expandTouchEndRef = useRef<number>(initialHeight);
  const animationExpandRef = useRef(new Animated.Value(initialHeight));
  const expandTopPositionRef = useRef(
    new Animated.Value((boardTask.location || 0) + initialHeight - 30),
  );

  const onExpandStart = useCallback(
    (e: GestureResponderEvent) => {
      e.stopPropagation();
      onResponderStart();
      expandTouchStartRef.current = e.nativeEvent.pageY;
    },
    [onResponderStart, expandTouchStartRef],
  );

  const onExpand = useCallback(
    (e: GestureResponderEvent) => {
      e.stopPropagation();
      onTouchMoveCallback(e.nativeEvent);
      expandTouchEndRef.current = e.nativeEvent.pageY;
      const movedBy = expandTouchEndRef.current - expandTouchStartRef.current;
      const newHeight = currentHeightRef.current + movedBy;
      animationExpandRef.current.setValue(newHeight);
      const expandHandlerNewTop = newHeight + moveEndRef.current;
      expandTopPositionRef.current.setValue(expandHandlerNewTop - 30);
    },
    [
      onTouchMoveCallback,
      currentHeightRef,
      expandTouchEndRef,
      expandTouchStartRef,
      animationExpandRef,
    ],
  );

  const onExpandEnd = useCallback(
    (e: GestureResponderEvent) => {
      e.stopPropagation();
      onResponderEnd();
      const movedBy = expandTouchEndRef.current - expandTouchStartRef.current;
      const newHeight = currentHeightRef.current + movedBy;
      currentHeightRef.current = newHeight;
    },
    [onResponderEnd, expandTouchEndRef, expandTouchStartRef, currentHeightRef],
  );

  /* removal */
  const startLocationXref = useRef<number>(0);
  const currentLocationXref = useRef<number>(0);
  const deleteAnimationRef = useRef(new Animated.Value(0));

  function removeTaskOnGestureStart(e: GestureResponderEvent) {
    e.stopPropagation();
    const {pageX} = e.nativeEvent;
    startLocationXref.current = pageX;
  }
  function removeTaskOnGestureMove(e: GestureResponderEvent) {
    e.stopPropagation();
    const {pageX} = e.nativeEvent;
    currentLocationXref.current = pageX;
    const movedBy = currentLocationXref.current - startLocationXref.current;
    deleteAnimationRef.current.setValue(movedBy);

    if (movedBy > 200) {
      suggestDelete(true);
    } else {
      suggestDelete(false);
    }
  }
  function removeTaskOnGestureEnd(e: GestureResponderEvent) {
    e.stopPropagation();
    const shouldDelete =
      currentLocationXref.current - startLocationXref.current >= 200;
    if (shouldDelete) {
      removeTaskFromBoard(task.id);
    } else {
      deleteAnimationRef.current.setValue(0);
      suggestDelete(false);
    }
  }

  const startDate = locationToStartDate({location: moveEndRef.current || 0});
  const endDate = locationToStartDate({
    location: moveEndRef.current + currentHeightRef.current,
  });

  return (
    <>
      <Animated.View
        style={[
          styles.taskBoardCard__periodIndicator,
          {top: animationRef.current},
          {height: animationExpandRef.current},
          {borderColor: toDelete ? 'red' : 'blue'},
          {
            backgroundColor: toDelete
              ? 'rgba(255,0,0,0.3)'
              : 'rgba(0,0,255,0.3)',
          },
        ]}
      />
      <Animated.View
        style={[
          styles.taskBoardCard,
          {top: animationRef.current},
          {height: animationExpandRef.current},
          {left: deleteAnimationRef.current},
        ]}>
        <Pressable
          onTouchStart={onMoveStart}
          onTouchEnd={onMoveEnd}
          onTouchMove={onMove}
          style={styles.taskBoardCard__content}>
          <Text style={styles.taskBoardCard__title}>
            {task.name}: {startDate} - {endDate}
          </Text>
        </Pressable>
      </Animated.View>
      <Animated.View
        style={[
          {top: expandTopPositionRef.current},
          styles.taskBoardCard__expander,
        ]}>
        <Pressable
          style={styles.taskBoardCard__expanderPressable}
          onResponderStart={() => true}
          onTouchStart={onExpandStart}
          onTouchEnd={onExpandEnd}
          onTouchMove={onExpand}>
          <View style={styles.taskBoardCard__expanderPressableIndicator} />
        </Pressable>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  taskBoardCard__periodIndicator: {
    width: '200%',
    position: 'absolute',
    left: -60,
    borderWidth: 1,
    borderColor: 'rgba(0,0,255,1)',
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  taskBoardCard: {
    width: '100%',
    position: 'absolute',
    left: 0,
    backgroundColor: 'white',
  },
  taskBoardCard__content: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-start',
  },
  taskBoardCard__expander: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 0,
    right: 10,
    zIndex: 1,
  },
  taskBoardCard__expanderPressable: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  taskBoardCard__expanderPressableIndicator: {
    borderWidth: 1,
    width: 20,
    height: 20,
    borderColor: 'blue',
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  taskBoardCard__rightCol: {
    backgroundColor: 'blue',
    flex: 1,
    padding: 5,
  },
  taskBoardCard__title: {
    ...mixins.label,
    fontSize: 9,
    lineHeight: 10,
    height: 10,
    paddingLeft: 5,
  },
  taskBoardCard__btn: {
    paddingVertical: 5,
  },
});

export default TaskBoardCard;
