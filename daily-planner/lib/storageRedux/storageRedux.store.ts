import {createStore, combineReducers} from 'redux';
import {reducerTasks} from './reducers/tasks/reducer';
import {reducerBoards} from './storageRedux.reducers';
import {TypedUseSelectorHook, useSelector, useDispatch} from 'react-redux';
import reactotron from './../../reactotron';

const ReactotronEnhancer =
  reactotron && reactotron.createEnhancer
    ? reactotron.createEnhancer()
    : undefined;

const store = createStore(
  combineReducers({
    tasks: reducerTasks,
    boards: reducerBoards,
  }),
  ReactotronEnhancer,
);

export type RootState = ReturnType<typeof store.getState>;
export type RootDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<RootDispatch>();

export default store;
