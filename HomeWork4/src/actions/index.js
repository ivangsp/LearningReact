/* eslint-disable no-console */
import RPS from '../games/RPS';
import Hangman from '../games/Hangman';

let games = {};
let gameId = 0;
export const NEW_GAME_STARTED = 'NEW_GAME_STARTED';
export const newGameStarted = (gameType) =>(dispatch, getState) => {
    gameId ++;
    if (gameType === 'HANGMAN') {
        console.log('>>>>', getState());
        if (getState().HangmanReducer.status === '' || getState().HangmanReducer.status === 'lost') {
            games[gameId] = Hangman.generate();
            dispatch(setHangmanGameId(gameId));
            dispatch(setHangmanGameStatus(games[gameId]));
        }
    } else {
        if (getState().RPSReducer.status === 'finished' || getState().RPSReducer.status === '') {
            games[gameId] = new RPS();
            // set the game status
            dispatch(setRPSGameId(gameId));
            dispatch(setRPSGameStatus(games[gameId].getStatus()));
            dispatch(startRPSGame());
        }
    }
    dispatch({
        type: NEW_GAME_STARTED,
        payload: gameType
    });
};

export const SET_HANGMAN_GAMEID = 'SET_HANGMAN_GAMEID';
export const setHangmanGameId = (gameId) => {
    return {
        type: SET_HANGMAN_GAMEID,
        payload: gameId
    };
};

export const SET_HANGMAN_GAME_STATUS = 'SET_HANGMAN_GAME_STATUS';
export const setHangmanGameStatus = (game) => {
    return {
        type: SET_HANGMAN_GAME_STATUS,
        payload: {
            status: game.getStatus(),
            numWrongGuess: game.getWrongGuessCount(),
            guessedLetters: game.getGuessedLetters()
        }
    };
};

export const HANGMAN_GUESS_SUBMITED = 'HANGMAN_GUESS_SUBMITED';
export const hangmanGuessSubmited = (gameId, guess) => (dispatch) => {
    const game = games[gameId];
    game.guess(guess);
    dispatch(setHangmanGameStatus(game));
};

export const SET_RPS_GAMEID = 'SET_RPS_GAMEID';
export const setRPSGameId = (gameId) => {
    return {
        type: SET_RPS_GAMEID,
        payload: gameId
    };
};

export const START_RPS_GAME = 'START_RPS_GAME';
export const startRPSGame = () => {
    return {
        type: START_RPS_GAME,
        payload: []
    };
};

export const SETGAMESTATUS = 'SETGAMESTATUS';
export const setRPSGameStatus = (status) => {
    return {
        type: SETGAMESTATUS,
        payload: status
    };
};

export const USER_GUESS_RPS_SUBMITED = 'USER_GUESS_RPS_SUBMITED';
export const userGuessSubmited = (gameId, guessChar) => (dispatch) => {
    const game = games[gameId];
    const move = game.guess(guessChar);
    dispatch(setRPSGameStatus(game.getStatus()));
    dispatch({
        type: USER_GUESS_RPS_SUBMITED,
        payload: move
    });
};
