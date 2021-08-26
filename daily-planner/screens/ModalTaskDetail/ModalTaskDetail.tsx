import React from 'react';
import { ModalsStackParamList } from 'lib/navigation/types';
import { RouteProp } from '@react-navigation/native';
import ModalBasicTemplate from 'atomic/templates/ModalBasicTemplate';
import TaskForm from 'components/TaskForm';
import { eModals } from 'lib/enums/screens';
import { cScreenTitles } from 'lib/enums/strings';
import { Text, View, StyleSheet } from 'react-native';
import useTasks from 'lib/hooks/useTasks';
import Paragraph from 'atomic/atoms/Paragraph';
import TextWithIcon from 'atomic/atoms/TextWithIcon';
import TextWithBullet from 'atomic/atoms/TextWithBullet';

type ViewsScreensProps = RouteProp<
  ModalsStackParamList,
  eModals.ModalTaskDetail
>;

type Props = {
  route: ViewsScreensProps;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  bulletList: {
    marginBottom: 15,
  }
})

const ModalTaskDetail: React.FC<Props> = ({ route }) => {
  const { params } = route;
  const { taskId } = params;
  const { methods } = useTasks();
  const currentTask = methods.getTask(taskId);

  if (!currentTask) return null;

  const {
    name,
    description,
    duration
  } = currentTask;

  return (
    <ModalBasicTemplate
      title={name}
      titleElement={(
        <TextWithIcon
          content={'A long text about title of this crazy shieeeet... And more.'}
        />
      )}
    >
      <View style={styles.content}>
        <View style={styles.bulletList}>
          <TextWithBullet
            label={'Created:'}
            content={'19.12.2021'}
          />
          <TextWithBullet
            label={'Duration:'}
            content={'20 min'}
          />
        </View>
        <Paragraph content={`Any text, longer or shorter, does not matter. What matters... it is! It is my text. IT IS my text. Really... it is this. It is mine! Mine at all. Please Accept...`} />
      </View>
    </ModalBasicTemplate>
  );
}
export default ModalTaskDetail;
