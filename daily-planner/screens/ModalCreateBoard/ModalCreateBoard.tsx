import React from 'react';
import {ModalsStackParamList} from 'lib/navigation/types';
import {RouteProp} from '@react-navigation/native';
import {ModalBasicTemplate} from 'atomic/templates/ModalBasicTemplate';
import BoardForm from 'components/BoardForm';
import {eModals} from 'lib/enums/screens';
import {cScreenTitles} from 'lib/enums/strings';

type ViewsScreensProps = RouteProp<
  ModalsStackParamList,
  eModals.ModalCreateBoard
>;

type ViewProp = {
  route: ViewsScreensProps;
};

const ModalCreateBoard: React.FC<ViewProp> = ({route}) => (
  <ModalBasicTemplate title={cScreenTitles[eModals.ModalCreateBoard]}>
    <BoardForm boardId={route.params.boardId} />
  </ModalBasicTemplate>
);

export default ModalCreateBoard;
