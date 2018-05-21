import {
  CREATE_GAME_REQUESTED,
  CREATE_GAME_SUCCEEDED,
  CREATE_GAME_FAILED,
  GAME_GUESS_REQUESTED,
  GAME_GUESS_SUCCEEDED,
  GAME_GUESS_FAILED
} from '../actions';

const initialState = {
  games: {},
  createGameRequestInFlight: false
};
const reducer = (state = initialState, action) => {
  if (action.type === CREATE_GAME_REQUESTED) {
    return Object.assign({}, state, {createGameRequestInFlight: true});
  } else if (action.type === CREATE_GAME_FAILED) {
    return Object.assign({}, state, {createGameRequestInFlight: false});
  } else if (action.type === CREATE_GAME_SUCCEEDED) {
    let game;
    if (action.payload.type === 'rps') {
      game = Object.assign({}, action.payload, {moves: []});
    } else {
      game = action.payload;
    }

    return {
      games: Object.assign({}, state.games, {[game.id]: game}),
      createGameRequestInFlight: false,
    };
  } else if (action.type === GAME_GUESS_REQUESTED) {
    const {gameId} = action.payload;
    const gameState = state.games[gameId];
    const newGameState = Object.assign({}, gameState, {status: 'guess_in_flight'});
    const newGames = Object.assign({}, state.games, {[gameId]: newGameState});
    return Object.assign({}, state, {games: newGames});
  } else if (action.type === GAME_GUESS_FAILED) {
    const {gameId} = action.payload;
    const gameState = state.games[gameId];
    const newGameState = Object.assign({}, gameState, {status: 'waiting_for_move'});
    const newGames = Object.assign({}, state.games, {[gameId]: newGameState});
    return Object.assign({}, state, {games: newGames});
  } else if (action.type === GAME_GUESS_SUCCEEDED) {
    const actionGameState = action.payload;
    let newGameState;

    if (actionGameState.type === 'rps') {
      const move = actionGameState.move;
      newGameState = {
        id: actionGameState.id,
        type: actionGameState.type,
        status: actionGameState.status,
        moves: state.games[actionGameState.id].moves.concat(move)
      };
    } else if (actionGameState.type === 'hangman') {
      newGameState = {
        id: actionGameState.id,
        type: actionGameState.type,
        status: actionGameState.status,
        wrongGuessCount: actionGameState.wrongGuessCount,
        letters: actionGameState.letters
      };
    }
    const newGames = Object.assign({}, state.games, {[newGameState.id]: newGameState});
    return Object.assign({}, state, {games: newGames});
  }
  return state;
};

export default reducer;
