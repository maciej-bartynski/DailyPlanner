import {createStore, combineReducers} from 'redux';
import {reducerTasks} from './storageRedux.reducers';

const store = createStore(
  combineReducers({
    tasks: reducerTasks,
  }),
);

export type RootState = ReturnType<typeof store.getState>;

export default store;
