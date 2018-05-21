import React from 'react';
import PropTypes from 'prop-types';

const connectedPlayers = ({players, userId, disconnect}) => {
    const connectedUsers = players.map((player, index) => {
        if (player.id === userId) {
           return (<p key={index}> {player.name} (you)</p>);
        } else {
           return (<p key={index}>{player.name}</p>);
        }
    });

    if (connectedUsers.length >0) {
        return (
            <div>
                <button onClick={() => disconnect()}>Disconnect</button>
                <h3>Online Players</h3>
                <div>{connectedUsers}</div>
            </div>
        );
    } else {
        return null;
    }
};

connectedPlayers.propTypes = {
    players: PropTypes.array.isRequired,
    userId: PropTypes.string.isRequired,
    disconnect: PropTypes.func.isRequired
};


export default connectedPlayers;
