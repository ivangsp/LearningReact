import {combineReducers} from 'redux';
import gameStateReducer from './GameStateReducer';
import connectionStateReducer from './ConnectionStateReducer';

export default combineReducers({
  games: gameStateReducer,
  connection: connectionStateReducer
});
