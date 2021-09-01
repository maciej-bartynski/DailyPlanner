import React, { useCallback, useState } from 'react';
import { ModalsStackParamList } from 'lib/navigation/types';
import { RouteProp } from '@react-navigation/native';
import ModalBasicTemplate from 'atomic/templates/ModalBasicTemplate';
import { eModals } from 'lib/enums/screens';
import { View, StyleSheet, ScrollView } from 'react-native';
import useTasks from 'lib/hooks/useTasks';
import Paragraph from 'atomic/atoms/Typography/Paragraph';
import TextWithIcon from 'atomic/atoms/TextWithIcon';
import TextWithBullet from 'atomic/atoms/TextWithBullet';
import { modalNavigation } from 'lib/navigation';
import ButtonActionRoundedBig from 'atomic/atoms/ButtonActionRoundedBig';
import ButtonActionRoundedSmall from 'atomic/atoms/ButtonActionRoundedSmall';
import Popup from 'atomic/atoms/Popup';
import ParagraphStressed from 'atomic/atoms/Typography/ParagraphStressed';
import navigationRef from 'lib/navigation/reference';

type ViewsScreensProps = RouteProp<
  ModalsStackParamList,
  eModals.ModalTaskDetail
>;

type Props = {
  route: ViewsScreensProps;
};

const ModalTaskDetail: React.FC<Props> = ({ route }) => {
  const { params } = route;
  const { taskId } = params;
  const { methods } = useTasks();
  const currentTask = methods.getTask(taskId);
  const [openModalDeleteTask, setOpenModalDeleteTask] = useState<boolean>(false);

  const {
    name,
    description,
    duration
  } = currentTask?.item || {};

  const { _createdAt, _updatedAt } = currentTask || {};

  const deleteTask = useCallback(async () => {
    navigationRef.current?.goBack();
    await methods.deleteTask(taskId);
  }, [taskId, methods]);

  const openModalCreateTask = useCallback(() => {
    modalNavigation.openModalCreateTask(taskId);
  }, [taskId]);

  if (!currentTask) return (
    <ModalBasicTemplate
      title="This task does not exists anymore!"
    >
      <View style={styles.placeholder}>
        <Paragraph content="Got it, take me back" />
        <ButtonActionRoundedBig
          label="Bye"
          onPress={() => navigationRef.current?.goBack()}
        />
      </View>
    </ModalBasicTemplate>
  );

  return (
    <ModalBasicTemplate
      titleElement={(
        <TextWithIcon
          content={name || ""}
        />
      )}
    >
      <View style={styles.content}>
        <View style={styles.content__inner}>
          <ScrollView>
            <View style={styles.bulletList}>
              {_createdAt && <TextWithBullet
                label={'Created:'}
                content={`${new Date(_createdAt)}`}
              />}
              {!!(_updatedAt && (_createdAt !== _updatedAt)) && <TextWithBullet
                label={'Last edited:'}
                content={`${new Date(_updatedAt)}`}
              />}
              <TextWithBullet
                label={'Duration:'}
                content={`${duration} min`}
              />
            </View>
            <Paragraph content={description || ""} />
          </ScrollView>
        </View>
        <View style={styles.actions}>
          <ButtonActionRoundedSmall
            label="Del"
            onPress={() => setOpenModalDeleteTask(true)}
          />
          <ButtonActionRoundedBig
            label="Edit"
            onPress={openModalCreateTask}
          />
        </View>
      </View>

      <Popup
        visible={openModalDeleteTask}
        setClose={() => setOpenModalDeleteTask(false)}
      >
        <Paragraph content='Are you sure you want to delete' />
        <ParagraphStressed content={name || ""} />
        <View style={styles.modalActions}>

          <ButtonActionRoundedSmall
            label="Delete"
            onPress={deleteTask}
          />
          <View style={styles.modalActions__labelWrapper}>
            <Paragraph content='No, take me back' />
            <ButtonActionRoundedBig
              label="Exit"
              onPress={() => setOpenModalDeleteTask(false)}
            />
          </View>
        </View>
      </Popup>
    </ModalBasicTemplate>
  );
}
export default ModalTaskDetail;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  bulletList: {
    marginBottom: 15,
  },
  actions: {
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flexDirection: 'row'
  },
  content__inner: {
    padding: 20,
    flex: 1,
  },
  modalActions: {
    marginTop: 40,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '100%'
  },
  modalActions__labelWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  placeholder: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
