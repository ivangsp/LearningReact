import {gameCreationFailed, gameCreated, gameMoveCompleted, buttonChanged,
    GAME_CREATED, GAME_MOVE_COMPLETED} from '../actions';


const SERVER_ADDRESS = 'http://localhost:8081/games/';

export const startNewGameRequest = (gametype, fetch = window.fetch ) => {
    return (dispatch) => {
        return fetch(
            SERVER_ADDRESS,
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({type: gametype})
            },
        ).then((response) => {
            if (response.ok) {
                response.json().then(
                    (res) => {
                        dispatch(gameCreated(res));
                        dispatch(buttonChanged(gametype));
                    }
                );
            } else {
                response.json().then(
                    ({error}) => dispatch(gameCreationFailed({error: error})),
                    (error) => dispatch(gameCreationFailed({error: 'Unparseable response'}))
                );
            }
        }).catch((error) => {
            dispatch(dispatch(gameCreationFailed({error: 'Service unreachable'})));
        });
    };
};


export const gameGuessRequested = (gameId, gametype, guess, fetch = window.fetch) => {
    return (dispatch) => {
        return fetch(
            SERVER_ADDRESS + gameId + '/' + 'moves',
            {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({type: gametype, guess: guess})
            },
        ).then((response) => {
            if (response.ok) {
                response.json().then(
                    (res) => {
                        dispatch(gameMoveCompleted(res));
                    }
                );
            } else {
                response.json().then(
                    ({error}) => dispatch(gameCreationFailed({error: error})),
                    (error) => dispatch(gameCreationFailed({error: 'Unparseable response'}))
                );
            }
        }).catch((error) => {
            dispatch(dispatch(gameCreationFailed({error: 'Service unreachable'})));
        });
    };
};

export const gameServerMiddleware = (store) => (next) => {
    return (action) => {
        if (action.type === GAME_CREATED) {
            store.dispatch(startNewGameRequest(action.payload));
        } else if (action.type === GAME_MOVE_COMPLETED) {
            store.dispatch(gameGuessRequested(action.payload));
        }
        return next(action);
    };
};

// export default gameServerMiddleware;
