import * as types from '../actions/types';
import {addUserId, addPlayers} from '../actions';

let socket;

export default () => (store) => (next) => {
    return (action) => {
        next(action);
        if (action.type === types.CONNECT) {
            const userName = action.payload;

            store.dispatch(({type: types.CONNECTING}));
            socket = new WebSocket('ws://localhost:8081/?playerName='+userName);

            socket.onopen = () => {
                store.dispatch({type: types.CONNECTED, payload: socket});
            };
            socket.onmessage = (event) => {
                const data = JSON.parse(event.data);
                switch (data.eventName) {
                    case types.ADD_USER_ID:
                        store.dispatch(addUserId(data.payload.playerId));
                        break;
                    case types.ADD_USERS:
                        store.dispatch(addPlayers(data.payload));
                        break;

                    default:
                        break;
                }
            };

            socket.onclose = (event) => {
                if (event.code === 4000) {
                    store.dispatch({type: types.USERNAME_EXISTS, payload: event.reason});
                }
            };

            socket.onerror =(error) => {
                store.dispatch({type: types.ERROR_IN_CONNECTION, payload: error});
            };
        } else if (action.type === types.DISCONNECT) {
            socket.close();
            store.dispatch({type: types.DISCONECTED});
        }
    };
};
