import {startNewGameRequest, gameServerMiddleware, gameGuessRequested}
 from '../../src/middlewares/GameServerMiddleware';
import {RPS_GAME_CREATED, HANGMAN_GAME_CREATED, GAME_CREATION_FAILED, HANGMAN_GAME_MOVED}
from '../../src/actions/index';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';


describe('startNewGameRequest', () => {
    context('when new game is created', () => {
        const middlewares = [thunk, gameServerMiddleware];
        const mockStore = configureStore(middlewares);
        let store;
        let fetch;

        beforeEach(() => {
            fetch = sinon.stub();
            fetch.returns(Promise.resolve({}));
            store = mockStore({});
        });

        it('dispatches RPS GAME CREATED', () => {
            store.dispatch(startNewGameRequest('rps', fetch));

            expect(store.getActions()).to.deep.contain({
                type: RPS_GAME_CREATED,
                payload: {id: '12', status: 'waiting', type: 'rps', won: false, moves: false}
            });
        });

        it('dispatches HANGMAN GAME CREATED', () => {
            store.dispatch(startNewGameRequest('hangman', fetch));

            expect(store.getActions()).to.deep.contain({
                type: HANGMAN_GAME_CREATED,
                payload: {id: '12', status: 'waiting', type: 'hangman', won: false, letters: [], wrongGuessCount: 0}
            });
        });

        it('dispatches GAME_CREATION_FAILED when creating game', () => {
            store.dispatch(startNewGameRequest('hsjsk', fetch));

            expect(store.getActions()).to.deep.contain({
                type: GAME_CREATION_FAILED,
                payload: {}
            });
        });

        it('dispatches HANGMAN_GAME_MOVED when submitting guess', () => {
            store.dispatch(gameGuessRequested('89huk', 'hangman', 's', fetch));

            expect(store.getActions()).to.deep.contain({
                type: HANGMAN_GAME_MOVED,
                payload: {}
            });
        });
    });
});
