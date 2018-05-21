import reducer from '../../src/reducers/GameStateReducer';
import {
  CREATE_GAME_REQUESTED,
  CREATE_GAME_SUCCEEDED,
  CREATE_GAME_FAILED,
  GAME_GUESS_REQUESTED,
  GAME_GUESS_SUCCEEDED,
  GAME_GUESS_FAILED
} from '../../src/actions';

describe('GameStateReducer', () => {
  it('initially returns empty object and no requests in flight', () => {
    expect(reducer(undefined, {})).to.eql({
      games: {},
      createGameRequestInFlight: false
    });
  });

  it('sets createGameRequestInFlight when CREATE_GAME_REQUESTED', () => {
    expect(reducer(undefined, {type: CREATE_GAME_REQUESTED})).to.eql({
      games: {},
      createGameRequestInFlight: true
    });
  });

  it('sets createGameRequestInFlight to false when CREATE_GAME_FAILED', () => {
    const initialState = {
      games: {},
      createGameRequestInFlight: true
    };
    expect(reducer(initialState, {type: CREATE_GAME_FAILED})).to.eql({
      games: {},
      createGameRequestInFlight: false
    });
  });

  it('adds game when game create succeeded', () => {
    const gameState = {
      id: 1,
      type: 'rps',
      moves: [],
      status: 'waiting_for_move'
    };
    const action = {
      type: CREATE_GAME_SUCCEEDED,
      payload: gameState
    };
    expect(reducer(undefined, action)).to.eql({
      games: {1: gameState},
      createGameRequestInFlight: false
    });
  });

  it('marks game as guessInFlight when GAME_GUESS_REQUESTED', () => {
    const initialGameState = {
      id: 1,
      type: 'rps',
      moves: [],
      status: 'waiting_for_move'
    };

    const initialState = {
      games: {1: initialGameState},
      createGameRequestInFlight: false
    };

    expect(reducer(initialState, {
      type: GAME_GUESS_REQUESTED,
      payload: {gameId: 1, guess: 'ROCK'}
    })).to.eql({
      games: {
        1: {
          id: 1,
          type: 'rps',
          moves: [],
          status: 'guess_in_flight'
        }
      },
      createGameRequestInFlight: false
    });
  });

  it('marks game as waiting_for_move when GAME_GUESS_FAILED', () => {
    const initialGameState = {
      id: 1,
      type: 'rps',
      moves: [],
      status: 'guess_in_flight'
    };

    const initialState = {
      games: {1: initialGameState},
      createGameRequestInFlight: false
    };

    expect(reducer(initialState, {
      type: GAME_GUESS_FAILED,
      payload: {gameId: 1}
    })).to.eql({
      games: {
        1: {
          id: 1,
          type: 'rps',
          moves: [],
          status: 'waiting_for_move'
        }
      },
      createGameRequestInFlight: false
    });
  });

  it('updates game when RPS GAME_GUESS_SUCCEEDED', () => {
    const initialGameState = {
      id: 1,
      type: 'rps',
      moves: [],
      status: 'guess_in_flight'
    };

    const initialState = {
      games: {1: initialGameState},
      createGameRequestInFlight: false
    };

    const actionPayload = {
      id: 1,
      type: 'rps',
      status: 'waiting_for_move',
      won: false,
      move: {
        result: 'LOSS',
        opposition: 'PAPER',
        guess: 'ROCK'
      }
    };

    const action = {
      type: GAME_GUESS_SUCCEEDED,
      payload: actionPayload
    };

    expect(reducer(initialState, action)).to.eql({
      games: {1: {
        id: 1,
        type: 'rps',
        status: 'waiting_for_move',
        moves: [{result: 'LOSS', opposition: 'PAPER', guess: 'ROCK'}]
      }},
      createGameRequestInFlight: false
    });
  });

  it('updates game when hangman GAME_GUESS_SUCCEEDED', () => {
    const initialGameState = {
      id: 1,
      type: 'hangman',
      wrongGuessCount: 0,
      letters: [null, null],
      status: 'guess_in_flight'
    };

    const initialState = {
      games: {1: initialGameState},
      createGameRequestInFlight: false
    };

    const actionPayload = {
      id: 1,
      type: 'hangman',
      status: 'waiting_for_move',
      letters: ['r', null],
      wrongGuessCount: 1,
      won: false,
      move: {
        matchedLetterCount: 1,
        guess: 'r'
      }
    };

    const action = {
      type: GAME_GUESS_SUCCEEDED,
      payload: actionPayload
    };

    expect(reducer(initialState, action)).to.eql({
      games: {1: {
        id: 1,
        type: 'hangman',
        status: 'waiting_for_move',
        wrongGuessCount: 1,
        letters: ['r', null]
      }},
      createGameRequestInFlight: false
    });
  });
});
