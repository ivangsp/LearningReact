import reducer from '../../src/reducers/ConnectionStateReducer';
import {
  CONNECT,
  CONNECTED,
  DISCONNECTED,
  ONLINE_PLAYERS_RECEIVED,
  CONNECTION_ACCEPTED
} from '../../src/actions';

describe('ConnectionStateReducer', () => {
  it('is initially disconnected', () => {
    expect(reducer(undefined, {})).to.eql({
      connectionState: 'disconnected',
      onlinePlayers: [],
      playerId: undefined,
      disconnectReason: undefined
    });
  });

  it('is connecting when CONNECT action dispatched', () => {
    expect(reducer(undefined, {type: CONNECT})).to.deep.contain({
      connectionState: 'connecting'
    });
  });

  it('clears disconnectReason when CONNECT action dispatched', () => {
    expect(reducer({disconnectReason: 'reason'}, {type: CONNECT})).to.deep.contain({
      disconnectReason: undefined
    });
  });

  it('is connected when CONNECTED action dispatched', () => {
    expect(reducer(undefined, {type: CONNECTED})).to.deep.contain({
      connectionState: 'connected'
    });
  });

  it('is disconnected when DISCONNECTED action dispatched', () => {
    expect(reducer(undefined, {type: DISCONNECTED, payload: {reason: 'reason'}})).to.deep.contain({
      connectionState: 'disconnected',
      disconnectReason: 'reason'
    });
  });

  it('sets onlinePlayers when ONLINE_PLAYERS_RECEIVED dispatched', () => {
    const players = [{id: 'id'}];
    expect(reducer(undefined, {type: ONLINE_PLAYERS_RECEIVED, payload: players})).to.deep.contain({
      onlinePlayers: players
    });
  });

  it('is in connection_accepted state when CONNECTION_ACCEPTED', () => {
    const playerId = 'player-id';
    expect(reducer(undefined, {type: CONNECTION_ACCEPTED, payload: {playerId}})).to.deep.contain({
      connectionState: 'connection_accepted'
    });
  });

  it('sets playerId when CONNECTION_ACCEPTED', () => {
    const playerId = 'player-id';
    expect(reducer(undefined, {type: CONNECTION_ACCEPTED, payload: {playerId}})).to.deep.contain({
      playerId: playerId
    });
  });
});
