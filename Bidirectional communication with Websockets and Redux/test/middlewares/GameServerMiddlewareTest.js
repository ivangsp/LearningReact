import middleware from '../../src/middlewares/GameServerMiddleware';
import configureStore from 'redux-mock-store';
import {
  CREATE_GAME_REQUESTED,
  CREATE_GAME_SUCCEEDED,
  CREATE_GAME_FAILED,
  GAME_GUESS_REQUESTED,
  GAME_GUESS_SUCCEEDED,
  GAME_GUESS_FAILED
} from '../../src/actions';

describe('GameServerMiddleware', () => {
  let store;
  let fetch;

    beforeEach(() => {
      fetch = sinon.stub();
      fetch.returns(Promise.resolve({}));

      const middlewares = [middleware(fetch)];
      const createMockStore = configureStore(middlewares);
      const initialState = {};
      store = createMockStore(initialState);
    });

  it('POSTS to /games when CREATE_GAME_REQUESTED', () => {
    store.dispatch({type: CREATE_GAME_REQUESTED, payload: 'rps'});
    expect(fetch).to.have.been.calledWith(
      'http://localhost:8081/games',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: '{"type":"rps"}'
      }
    );
  });

  it('dispatches CREATE_GAME_SUCCEEDED when fetch succeeds', () => {
    const newGameState = {id: 1, status: 'waiting_for_move'};

    fetch.returns(
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(newGameState)
      })
    );

    return store.dispatch({type: CREATE_GAME_REQUESTED, payload: 'rps'})
      .then(() => {
        expect(store.getActions()).to.deep.contain({
          type: CREATE_GAME_SUCCEEDED,
          payload: newGameState
        });
      });
  });

  it('dispatches CREATE_GAME_FAILED when fetch fails', () => {
    fetch.returns(
      Promise.resolve({
        ok: false,
      })
    );

    return store.dispatch({type: CREATE_GAME_REQUESTED, payload: 'rps'})
      .then(() => {
        expect(store.getActions()).to.deep.contain({
          type: CREATE_GAME_FAILED
        });
      });
  });

  it('POSTS to /games/:gameId/moves when GAME_GUESS_REQUESTED', () => {
    store.dispatch({type: GAME_GUESS_REQUESTED, payload: {gameId: 1, guess: 'ROCK'}});
    expect(fetch).to.have.been.calledWith(
      'http://localhost:8081/games/1/moves',
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: '{"guess":"ROCK"}'
      }
    );
  });

  it('dispatches GAME_GUESS_SUCCEEDED when fetch succeeds', () => {
    const newGameState = {id: 1, status: 'waiting_for_move'};
    fetch.returns(
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(newGameState)
      })
    );

    return store.dispatch({type: GAME_GUESS_REQUESTED, payload: {gameId: 1, guess: 'ROCK'}})
      .then(() => {
        expect(store.getActions()).to.deep.contain({
          type: GAME_GUESS_SUCCEEDED,
          payload: newGameState
        });
      });
  });

  it('dispatches GAME_GUESS_FAILED when fetch fails', () => {
    fetch.returns(
      Promise.resolve({
        ok: false,
      })
    );

    return store.dispatch({type: GAME_GUESS_REQUESTED, payload: {gameId: 1, guess: 'ROCK'}})
      .then(() => {
        expect(store.getActions()).to.deep.contain({
          type: GAME_GUESS_FAILED,
          payload: {gameId: 1}
        });
      });
  });
});
