import AppReducer from './ButtonReducer';
import RPSReducer from './RpsReducer';
import HangmanReducer from './HangmanReducer';

import {combineReducers} from 'redux';

export default combineReducers({
  RPSReducer: RPSReducer,
  HangmanReducer: HangmanReducer,
  AppReducer: AppReducer
});
