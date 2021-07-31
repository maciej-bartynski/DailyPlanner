import React, {useCallback} from 'react';
import {ViewsStackParamList} from 'lib/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {CreationPageTemplate} from 'atomic/templates/CreationPageTemplate';
import useBoards from 'lib/hooks/useBoards';
import BoardCard from 'atomic/molecules/BoardCard';
import {modalNavigation} from 'lib/navigation/navigate';
import {eViews} from 'lib/enums/screens';
import {
  cScreenTitles,
  eBoardsViewBackgroundCommunicates,
} from 'lib/enums/strings';
import ViewBoardsScrollView from './atoms/ScrollView';
import {eApiIssueSeverity} from 'api/types';

type ViewsScreensProps = RouteProp<ViewsStackParamList, eViews.Tasks>;

type ViewProp = {
  route: ViewsScreensProps;
};

const ViewBoards: React.FC<ViewProp> = () => {
  const {loading, severity, data, wasDataFetchAttempt} = useBoards();
  const {total, boards} = data;

  const openModalCreateBoard = useCallback(
    () => modalNavigation.openModalCreateBoard(),
    [],
  );

  const hasError = severity === eApiIssueSeverity.Error;
  const isLoading = !wasDataFetchAttempt && loading;

  return (
    <CreationPageTemplate
      title={cScreenTitles[eViews.Boards]}
      loading={isLoading ? eBoardsViewBackgroundCommunicates.Loading : ''}
      error={hasError ? eBoardsViewBackgroundCommunicates.Error : ''}
      data={!total ? eBoardsViewBackgroundCommunicates.Data : ''}
      onCreatePressHandler={openModalCreateBoard}>
      {boards ? (
        <ViewBoardsScrollView>
          {Object.values(boards).map(board => {
            return (
              <BoardCard
                key={board.id}
                boardId={board.id}
                title={board.title}
                description={board.description}
              />
            );
          })}
        </ViewBoardsScrollView>
      ) : null}
    </CreationPageTemplate>
  );
};

ViewBoards.whyDidYouRender = {
  logOnDifferentValues: false,
};

export default ViewBoards;
