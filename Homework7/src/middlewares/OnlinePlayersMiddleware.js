import {
  CONNECT,
  CONNECTED,
  CONNECTION_ACCEPTED,
  DISCONNECT,
  DISCONNECTED,
  ONLINE_PLAYERS_RECEIVED,
} from '../actions';
import {connect} from '../WebSocket';

const eventNameToActionType = {
  'online-players': ONLINE_PLAYERS_RECEIVED,
  'connection:accepted': CONNECTION_ACCEPTED
};

export default (store) => (next) => {
  let currentConnection;
  return (action) => {
    next(action);

    if (action.type === CONNECT) {
      currentConnection = connect({
        parameters: {playerName: action.payload.playerName},
        onOpen: () => store.dispatch({type: CONNECTED}),
        onClose: ({reason}) => store.dispatch({type: DISCONNECTED, payload: {reason}}),
        onMessage: ({eventName, payload}) => {
          const actionType = eventNameToActionType[eventName];
          if (actionType) {
            store.dispatch({type: actionType, payload: payload});
          }
        }
      });
    } else if (action.type === DISCONNECT && currentConnection) {
      currentConnection.close();
    }
  };
};
