import {HANGMAN_GAME_CREATED, HANGMAN_GAME_MOVED} from '../actions/index';

const initialState = {
    id: '',
    wrongGuessCount: 0,
    letters: [],
    status: '',
    won: false

};

const HangmanReducer = (state = initialState, action) => {
    switch (action.type) {
      case HANGMAN_GAME_CREATED: {
          return Object.assign({}, state, action.payload);
      }
        case HANGMAN_GAME_MOVED: {
            return Object.assign({}, state, action.payload);
        }

      default:
        return state;
    }
  };
export default HangmanReducer;
