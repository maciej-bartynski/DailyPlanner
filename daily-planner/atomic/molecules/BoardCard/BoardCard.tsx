import React, {useMemo} from 'react';
import useBoards from 'lib/hooks/useBoards';
import {modalNavigation} from 'lib/navigation/navigate';
import {eButtonVariant} from 'lib/enums/buttons';
import {eButtonTitles} from 'lib/enums/strings';
import Card from '../Card';
import {eColors} from 'lib/styles/colors';
import {View} from 'react-native';
import defaultStyles from './BoardCard.styles';

type Props = {
  title: string;
  description?: string;
  tasksAmount?: string;
  boardId: string;
};

const BoardCard: React.FC<Props> = ({
  title,
  description,
  tasksAmount,
  boardId,
}) => {
  const {methods} = useBoards();

  const actions = useMemo(
    () => [
      {
        variant: eButtonVariant.Primary,
        label: eButtonTitles.Edit,
        onPress: () => modalNavigation.openModalCreateBoard(boardId),
      },
      {
        variant: eButtonVariant.Primary,
        label: eButtonTitles.AddTasksToBoard,
        onPress: () => {
          modalNavigation.openModalAddTasks(boardId);
        },
      },
      {
        variant: eButtonVariant.Tertiary,
        label: eButtonTitles.Delete,
        onPress: () => {
          methods.deleteBoard(boardId);
        },
      },
    ],
    [methods, boardId],
  );

  return (
    <View style={defaultStyles.wrapper}>
      <Card
        colorVariant={eColors.Gray}
        title={title}
        description={description}
        extraInfo={[tasksAmount || '']}
        actions={actions}
      />
    </View>
  );
};

export default BoardCard;
