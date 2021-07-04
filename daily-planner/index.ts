export {default} from './app';

if (__DEV__) {
  import('./reactotron').then(() => console.log('Reactotron Configured'));
}
