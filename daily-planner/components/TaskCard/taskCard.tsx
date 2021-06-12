import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

const TaskCard = () => {
  const LABELS = ['First label', 'Second label'];
  const [state, setState] = useState(0);

  const changeState = () => {
    setState(state ? 0 : 1);
  };
  return (
    <View>
      <Text testID="label">{LABELS[state]}</Text>
      <Button testID="stateButton" title="Change label" onPress={changeState} />
    </View>
  );
};

export default TaskCard;
