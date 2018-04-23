import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    SET_HANGMAN_GAMEID, SETGAMESTATUS, START_RPS_GAME,
    newGameStarted
} from '../../src/actions/index';


describe('newGameStarted', () => {
    context('when a new Hangman Game is started', () => {
        const middlewares = [thunk];
        const createMockStore = configureStore(middlewares);
        let store;

        beforeEach(() => {
            const initialState = {
                gameId: 0,
                numWrongGuess: 0,
                guessedLetters: [],
                status: ''
            };
            store = createMockStore(initialState);
        });

        it('dispatches set hangman id', () => {
            store.dispatch(newGameStarted('HANGMAN'));

            expect(store.getActions()).to.deep.contain({
                type: SET_HANGMAN_GAMEID,
                payload: 1
            });
        });
        it('Assigns different gameId every time a new game is created', () => {
            store.dispatch(newGameStarted('HANGMAN'));
            const gameId1 = store.getActions()[0].payload;

            store.dispatch(newGameStarted('HANGMAN'));
            const gameId2 = store.getActions()[3].payload;

            expect(gameId1).not.to.eql(gameId2);
        });
    });

    context('when a new RPS Game is started', () => {
        const middlewares = [thunk];
        const createMockStore = configureStore(middlewares);
        let store;

        beforeEach(() => {
            const initialState = {
                moves: [],
                status: '',
                gameId: 0
            };
            store = createMockStore(initialState);
        });

        it('dispatches set RPS game status', () => {
            store.dispatch(newGameStarted('RPS'));
            expect(store.getActions()).to.deep.contain({
                type: SETGAMESTATUS,
                payload: 'waiting_for_move'
            });
        });

        it('dispatches start RPS game', () => {
            store.dispatch(newGameStarted('RPS'));
            expect(store.getActions()).to.deep.contain({
                type: START_RPS_GAME,
                payload: []
            });
        });
    });
});
