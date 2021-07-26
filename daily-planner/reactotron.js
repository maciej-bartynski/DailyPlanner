import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {reactotronRedux} from 'reactotron-redux';

export default Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({name: 'DailyPlanner'})
  .useReactNative()
  .use(reactotronRedux())
  .connect();
