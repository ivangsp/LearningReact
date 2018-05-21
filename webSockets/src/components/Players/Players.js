import React from 'react';
import PropTypes from 'prop-types';
import InputField from './UserInputField';
import ConnectedPlayers from './ConnectedPlayers';

const Players = (props) => {
    return (
        <div>
            {(props.error.length >0)? <p className="error"> {props.error}</p>: null}
            {(! props.connected) ?
                (<InputField connect={(username) =>props.connect(username)} />):
                (
                    <div>

                        <ConnectedPlayers players={props.players}
                                          userId={props.userId} disconnect={() => props.disconnect()}/>
                    </div>
                )
            }
            {(props.connecting && props.error === '')? (<p>conecting..........</p>): null}

        </div>

    );
};

Players.propTypes = {
    players: PropTypes.array.isRequired,
    connect: PropTypes.func.isRequired,
    userId: PropTypes.string.isRequired,
    connecting: PropTypes.bool.isRequired,
    disconnect: PropTypes.func.isRequired,
    connected: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired
};


export default Players;
