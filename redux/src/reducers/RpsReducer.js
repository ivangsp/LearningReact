import {
    SET_RPS_GAMEID,
    START_RPS_GAME,
    USER_GUESS_RPS_SUBMITED,
    SETGAMESTATUS} from '../actions/index';

const initialMoves = [];
const initialStatus = '';

const initialState = {
    moves: initialMoves,
    status: initialStatus,
    gameId: 0
};

const RpsReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_RPS_GAMEID: {
        return {...state, gameId: action.payload};
      }
      case USER_GUESS_RPS_SUBMITED: {
        const newMoves = state.moves.concat(action.payload);
        return {...state, moves: newMoves};
      }
      case START_RPS_GAME: {
        return {...state, moves: action.payload};
      }
      case SETGAMESTATUS: {
            return {...state, status: action.payload};
      }
      default:
        return state;
    }
  };
  export default RpsReducer;
