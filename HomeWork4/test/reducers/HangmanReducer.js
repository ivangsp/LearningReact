import {
    setHangmanGameId
} from '../../src/actions/index';

import reducer from '../../src/reducers/HangmanReducer';

describe('Hangman Reducer', () => {
    it('is empty initially', () => {
        const initialState = {
            gameId: 0,
            numWrongGuess: 0,
            guessedLetters: [],
            status: ''
        };
        expect(reducer(undefined, {})).to.eql(initialState);
    });

    it('sets game id when the game starts', () => {
        const initialState = reducer(undefined, {});
        expect(reducer(initialState, setHangmanGameId(1))).to.
        eql({...initialState, gameId: 1});
    });
});
