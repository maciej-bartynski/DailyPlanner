import React, { useState, useRef, useCallback } from 'react';
import { iTask } from 'components/../ctxes/tasks/_types';
import styles from './taskCard.styles';
import { Animated, View, Button, StyleSheet, PanResponder, Text } from "react-native";

const TaskCard = () => {
  const pan = useRef(new Animated.ValueXY()).current;
  const height = useRef(150);
  const secondPan = useRef(new Animated.Value(150)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => {
        console.log("FIRST")
        return true
      },
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: (argA, argB) => {

        return Animated.event(
          [
            null,
            { dx: pan.x, dy: pan.y }
          ],
          { useNativeDriver: false }
        )(argA, argB)
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).current;

  const secPanResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (e) => {
        e.stopPropagation();
        console.log("FIRST33")
        return true
      },
      onPanResponderGrant: () => {
        //secondPan.setValue(height.current);
      },
      onPanResponderTerminationRequest: (evt, gestureState) => false,
      onPanResponderMove: (argA, argB) => {
         console.log("halo", height.current );
        
        secondPan.setValue(height.current + argB.dy);

       
        // return Animated.event(
        //   [
        //     null,
        //     { dx: secondPan.x, dy: secondPan.y }
        //   ],
        //   { useNativeDriver: false }
        // )(argA, { ...argB, y: secondPan.y._value + argB.dy })
      },
      onPanResponderRelease: (evt, gestureState) => {
        //secondPan.flattenOffset();
        console.log("DI{")
        height.current = height.current + gestureState.dy;
      }
    })
  ).current;


  return (

    <Animated.View
      style={{
      transform: [{ translateY: pan.y }],
        ...styles.box,
        height: secondPan
      }}
      // onLayout={e=>{
      //   height.current = e.nativeEvent.layout.height
      // //  console.log(e.nativeEvent.layout)
      // }}
     {...panResponder.panHandlers}
    >
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: "red"
        }}
        {...secPanResponder.panHandlers}
      />
    </Animated.View>
  );
}

export default TaskCard;

// const TaskCard: React.FC<
//   iTask & {
//     removeTask: (id: number) => void;
//   }
// > = ({ removeTask, title, content, length, id }) => {

//   const panResponder = React.useRef(
//     PanResponder.create({
//       // Ask to be the responder:
//       onStartShouldSetPanResponder: (evt, gestureState) => true,
//       onStartShouldSetPanResponderCapture: (evt, gestureState) =>
//         true,
//       onMoveShouldSetPanResponder: (evt, gestureState) => true,
//       onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
//         true,

//       onPanResponderGrant: (evt, gestureState) => {
//         // The gesture has started. Show visual feedback so the user knows
//         // what is happening!
//         // gestureState.d{x,y} will be set to zero now
//       },
//       onPanResponderMove: (evt, gestureState) => {
//         // The most recent move distance is gestureState.move{X,Y}
//         // The accumulated gesture distance since becoming responder is
//         // gestureState.d{x,y}
//       },
//       onPanResponderTerminationRequest: (evt, gestureState) =>
//         true,
//       onPanResponderRelease: (evt, gestureState) => {
//         // The user has released all touches while this view is the
//         // responder. This typically means a gesture has succeeded
//       },
//       onPanResponderTerminate: (evt, gestureState) => {
//         // Another component has become the responder, so this gesture
//         // should be cancelled
//       },
//       onShouldBlockNativeResponder: (evt, gestureState) => {
//         // Returns whether this component should block native components from becoming the JS
//         // responder. Returns true by default. Is currently only supported on android.
//         return true;
//       },


//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderGrant: () => {
//         pan.setOffset({
//           x: pan.x._value,
//           y: pan.y._value
//         });
//       },
//       onPanResponderMove: Animated.event(
//         [
//           null,
//           { dx: pan.x, dy: pan.y }
//         ]
//       ),
//       onPanResponderRelease: () => {
//         pan.flattenOffset();
//       }
//     })
//   ).current;




//   const onPressHandler = useCallback(() => {
//     removeTask(id);
//   }, [removeTask, id]);


//   return (
//     <View {...panResponder.panHandlers} style={styles.root}>
//       <Text style={styles.title}>
//         {title}:{'' + id}
//       </Text>
//       <Text style={styles.content}>{content}</Text>
//       <Text style={styles.content}>{'' + length}</Text>
//       <Button
//         testID="stateButton"
//         title="Remove this task"
//         onPress={onPressHandler}
//       />
//     </View>
//   );
// };

// export default TaskCard;
