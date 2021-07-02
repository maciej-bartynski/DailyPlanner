import {createStore, combineReducers} from 'redux';
import {reducerTasks} from './storageRedux.reducers';
import {reducerBoards} from './storageRedux.reducers';

const store = createStore(
  combineReducers({
    tasks: reducerTasks,
    boards: reducerBoards,
  }),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
