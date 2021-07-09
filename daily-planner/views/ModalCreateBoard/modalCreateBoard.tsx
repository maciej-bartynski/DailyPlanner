import React from 'react';
import {ModalsStackParamList} from 'lib/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {ModalBasicTemplate} from 'atomic/templates/ModalBasicTemplate';
import BoardForm from 'components/BoardForm';

type ViewsScreensProps = RouteProp<ModalsStackParamList, 'ModalCreateBoard'>;

type ViewProp = {
  route: ViewsScreensProps;
};

const ModalCreateBoard: React.FC<ViewProp> = ({route}) => {
  const {boardId} = route.params;
  return (
    <ModalBasicTemplate title="Create board">
      <BoardForm boardId={boardId} />
    </ModalBasicTemplate>
  );
};

export default ModalCreateBoard;
