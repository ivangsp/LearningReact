export const CREATE_GAME_REQUESTED = 'CREATE_GAME_REQUESTED';
export const CREATE_GAME_FAILED = 'CREATE_GAME_FAILED';
export const CREATE_GAME_SUCCEEDED = 'CREATE_GAME_SUCCEEDED';

export const GAME_GUESS_REQUESTED = 'GAME_GUESS_REQUESTED';
export const GAME_GUESS_FAILED = 'GAME_GUESS_FAILED';
export const GAME_GUESS_SUCCEEDED = 'GAME_GUESS_SUCCEEDED';
import * as types from './types';

export const createGameRequested = (type) => ({
  type: CREATE_GAME_REQUESTED,
  payload: type
});

export const gameGuessRequested = ({gameId, guess}) => ({
  type: GAME_GUESS_REQUESTED,
  payload: {gameId, guess}
});

export const connectUser = (userName) => ({
    type: 'CONNECT',
    payload: userName
});

export const addUserId = (userId) => ({
    type: types.ADD_USER_ID,
    payload: userId
});

export const addPlayers = (players) => ({
    type: types.ADD_USERS,
    payload: players
});

export const disconnect = () => ({
    type: types.DISCONNECT
});
