import BtnReducer from './ButtonReducer';
import RPSReducer from './RpsReducer';
import HangmanReducer from './HangmanReducer';

import {combineReducers} from 'redux';

export default combineReducers({
  RPSReducer: RPSReducer,
  HangmanReducer: HangmanReducer,
  BtnReducer: BtnReducer
});
