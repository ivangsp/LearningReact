import {SET_HANGMAN_GAMEID, SET_HANGMAN_GAME_STATUS} from '../actions/index';

const initialState = {
    gameId: 0,
    numWrongGuess: 0,
    guessedLetters: [],
    status: ''
  };

const HangmanReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_HANGMAN_GAMEID: {
          return {...state, gameId: action.payload};
      }
      case SET_HANGMAN_GAME_STATUS: {
            return {...state,
                status: action.payload.status,
                numWrongGuess: action.payload.numWrongGuess,
                guessedLetters: action.payload.guessedLetters
            };
      }
      default:
        return state;
    }
  };
export default HangmanReducer;
