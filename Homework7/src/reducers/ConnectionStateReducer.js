import {
  CONNECT,
  CONNECTED,
  DISCONNECTED,
  ONLINE_PLAYERS_RECEIVED,
  CONNECTION_ACCEPTED
} from '../actions';

const initialState = {
  connectionState: 'disconnected',
  onlinePlayers: [],
  playerId: undefined,
  disconnectReason: undefined
};
const reducer = (state = initialState, action) => {
  if (action.type === CONNECT) {
    return {...state, connectionState: 'connecting', disconnectReason: initialState.disconnectReason};
  } else if (action.type === CONNECTED) {
    return {...state, connectionState: 'connected'};
  } else if (action.type === DISCONNECTED) {
    return {...state, connectionState: 'disconnected', disconnectReason: action.payload.reason};
  } else if (action.type === ONLINE_PLAYERS_RECEIVED) {
    return {...state, onlinePlayers: action.payload};
  } else if (action.type === CONNECTION_ACCEPTED) {
    return {...state, connectionState: 'connection_accepted', playerId: action.payload.playerId};
  }
  return state;
};

export default reducer;
