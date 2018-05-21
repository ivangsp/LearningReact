import React from 'react';
import PropTypes from 'prop-types';

export const OnlinePlayer = ({id, name, isSelf}) => {
  return <div key={id}>{name}{isSelf ? ' (you)' : null}</div>;
};

OnlinePlayer.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired,
};

const OnlinePlayers = ({players, selfId}) => {
  const playerElements = players.map(({id, name}) =>
    <OnlinePlayer key={id} id={id} name={name} isSelf={id === selfId} />
  );

  return (
    <div className='onlinePlayers'>
      <h2> Online Players </h2>
      {playerElements}
    </div>
  );
};

OnlinePlayers.propTypes = {
  players: PropTypes.array.isRequired,
  selfId: PropTypes.string
};

export default OnlinePlayers;
