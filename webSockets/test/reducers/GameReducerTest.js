import reducer from '../../src/reducers';
import {
    CREATE_GAME_REQUESTED,
    CREATE_GAME_SUCCEEDED,
    CREATE_GAME_FAILED,
    GAME_GUESS_REQUESTED,
    GAME_GUESS_SUCCEEDED,
    GAME_GUESS_FAILED
} from '../../src/actions';

describe('reducer', () => {
    const initialState = {
        gameReducer: {
            createGameRequestInFlight: false,
            games: {}
        },
        playerReducer: {
            connecting: false,
            players: [],
            user_id: '',
            connected: false,
            error: ''
        }
    };

    it('initially returns empty object', () => {
        expect(reducer(undefined, {})).to.eql(initialState);
    });

    it('sets createGameRequestInFlight when CREATE_GAME_REQUESTED', () => {
        expect(reducer(undefined, {type: CREATE_GAME_REQUESTED})).to.eql({
            ...initialState, gameReducer: {createGameRequestInFlight: true, games: {}}
        });
    });

    it('sets createGameRequestInFlight to false when CREATE_GAME_FAILED', () => {
        expect(reducer(initialState, {type: CREATE_GAME_FAILED})).to.eql(initialState);
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
        expect(reducer(undefined, action)).to.eql({...initialState, gameReducer: {
                createGameRequestInFlight: false, games: {1: {type: 'rps', moves: [],
                        status: 'waiting_for_move', id: 1}}
            }});
    });

    it('marks game as guessInFlight when GAME_GUESS_REQUESTED', () => {
        expect(reducer(initialState, {
            type: GAME_GUESS_REQUESTED,
            payload: {gameId: 1, guess: 'ROCK'}
        })).to.eql({...initialState, gameReducer: {
                createGameRequestInFlight: false, games: {1: {status: 'guess_in_flight'}}}
        });
    });

    it('marks game as waiting_for_move when GAME_GUESS_FAILED', () => {
        const initialGameState = {
            id: 1,
            type: 'rps',
            moves: [],
            status: 'guess_in_flight'
        };

        const state = {...initialState, gameReducer: {
                games: {1: initialGameState}, createGameRequestInFlight: false}

        };

        expect(reducer(state, {
            type: GAME_GUESS_FAILED,
            payload: {gameId: 1}
        })).to.eql({...initialState, gameReducer: {
                games: {
                    1: {
                        id: 1,
                        type: 'rps',
                        moves: [],
                        status: 'waiting_for_move'
                    }
                },
                createGameRequestInFlight: false
            }

        });
    });

    it('updates game when RPS GAME_GUESS_SUCCEEDED', () => {
        const initialGameState = {
            id: 1,
            type: 'rps',
            moves: [],
            status: 'guess_in_flight'
        };

        const state = {...initialState, gameReducer: {
                games: {1: initialGameState}, createGameRequestInFlight: false}

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

        expect(reducer(state, action)).to.eql({
            ...state, gameReducer: {
                games: {1: {
                        id: 1,
                        type: 'rps',
                        status: 'waiting_for_move',
                        moves: [{result: 'LOSS', opposition: 'PAPER', guess: 'ROCK'}]
                    }},
                createGameRequestInFlight: false
            }

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

        const state = {...initialState, gameReducer: {
                games: {1: initialGameState}, createGameRequestInFlight: false}

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

        expect(reducer(state, action)).to.eql({
            ...state, gameReducer: {
                games: {1: {
                        id: 1,
                        type: 'hangman',
                        status: 'waiting_for_move',
                        wrongGuessCount: 1,
                        letters: ['r', null]
                    }},
                createGameRequestInFlight: false
            }

        });
    });
});
