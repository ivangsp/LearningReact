import {
  CREATE_GAME_REQUESTED,
  CREATE_GAME_SUCCEEDED,
  CREATE_GAME_FAILED,
  GAME_GUESS_REQUESTED,
  GAME_GUESS_SUCCEEDED,
  GAME_GUESS_FAILED
} from '../actions';

const SERVER_ADDRESS = 'http://localhost:8081';

export default (fetch = window.fetch) => (store) => (next) => {
  return (action) => {
    next(action);

    if (action.type === CREATE_GAME_REQUESTED) {
      const type = action.payload;

      return fetch(
        SERVER_ADDRESS + '/games',
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({type})
        },
      ).then((response) => {
        if (response.ok) {
          response.json().then(
            (gameState) => store.dispatch({type: CREATE_GAME_SUCCEEDED, payload: gameState})
          );
        } else {
          store.dispatch({type: CREATE_GAME_FAILED});
        }
      }).catch(() => {
        store.dispatch({type: CREATE_GAME_FAILED});
      });
    } else if (action.type === GAME_GUESS_REQUESTED) {
      const {gameId, guess} = action.payload;
      return fetch(
        SERVER_ADDRESS + `/games/${gameId}/moves`,
        {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify({guess})
        },
      ).then((response) => {
        if (response.ok) {
          response.json().then(
            (gameState) => store.dispatch({type: GAME_GUESS_SUCCEEDED, payload: gameState})
          );
        } else {
          store.dispatch({type: GAME_GUESS_FAILED, payload: {gameId: gameId}});
        }
      }).catch(() => {
        store.dispatch({type: GAME_GUESS_FAILED, payload: {gameId: gameId}});
      });
    }
  };
};
