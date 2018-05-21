import gameReducer from './gameReducer';
import playerReducer from './playerReducer';

import {combineReducers} from 'redux';

export default combineReducers({
    gameReducer: gameReducer,
    playerReducer: playerReducer
});
