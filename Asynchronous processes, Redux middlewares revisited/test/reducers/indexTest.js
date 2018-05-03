import reducer from '../../src/reducers';
import {RPS_GAME_CREATED, RPS_GAME_MOVED} from '../../src/actions';

const initialState = {
    BtnReducer: {
        activeButton: ''
    },
    HangmanReducer: {
        id: '',
        letters: [],
        status: 'finished',
        won: false,
        wrongGuessCount: 0

    },
    RPSReducer: {
        id: '',
        status: '',
        won: false,
        moves: []
    }
};

describe('reducer', () => {
    it('initially returns empty object', () => {
        expect(reducer(undefined, {})).to.eql(initialState);
    });

    it('adds game when game created', () => {
        const gameState = {
            id: 1,
            type: 'rps',
            moves: [],
            status: 'waiting_for_move',
            won: false
        };
        const action = {
            type: RPS_GAME_CREATED,
            payload: gameState
        };

        const finalState = {
            BtnReducer: {
                activeButton: ''
            },
            HangmanReducer: {
                id: '',
                letters: [],
                status: '',
                won: false,
                wrongGuessCount: 0
            },
            RPSReducer: {
                id: 1,
                moves: [],
                status: 'waiting_for_move',
                won: false
            }
        };
        expect(reducer(undefined, action)).to.eql(finalState);
    });

    it('updates game when game move completed', () => {
      const initialGameState = {
          id: 1,
          moves: [],
          status: 'waiting_for_move',
          won: false
      };

      const actionCreated = {
            type: RPS_GAME_CREATED,
            payload: initialGameState
        };

      const newstate = {
          id: 1,
          moves: [{guess: 'R', opposition: 'P', result: 'LOSS'}],
          status: 'waiting_for_move',
          won: false
        };

        const action = {
            type: RPS_GAME_MOVED,
            payload: newstate
          };

        const finalState = {
            BtnReducer: {
                activeButton: ''
            },
            HangmanReducer: {
                id: '',
                letters: [],
                status: '',
                won: false,
                wrongGuessCount: 0
            },
            RPSReducer: {
                id: 1,
                moves: [{guess: 'R', opposition: 'P', result: 'LOSS'}],
                status: 'waiting_for_move',
                won: false
            }
        };
      expect(reducer(action, actionCreated)).to.eql(finalState);
    });
});
