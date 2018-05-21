import React from 'react';
import PropTypes from 'prop-types';
import ConnectButton from './ConnectButton';

const ConnectionState = ({connectionState, connect, disconnect, disconnectReason}) => {
  if (connectionState === 'connection_accepted') {
    return <div className='connection-state'><button onClick={disconnect}>Disconnect!</button></div>;
  } else if (connectionState === 'disconnected' && disconnectReason === 'player-name-taken') {
    return (
      <div className='connection-state'>
        <div>Player name taken! Try another name.</div>
        <ConnectButton connect={connect} />
      </div>
    );
  } else if (connectionState === 'disconnected') {
    return <div className='connection-state'><ConnectButton connect={connect} /></div>;
  } else if (connectionState === 'connecting' || connectionState === 'connected') {
    return <div className='connection-state'>Connecting...</div>;
  }
};

ConnectionState.propTypes = {
  connectionState: PropTypes.string.isRequired,
  connect: PropTypes.func.isRequired,
  disconnect: PropTypes.func.isRequired,
  disconnectReason: PropTypes.string
};

export default ConnectionState;
