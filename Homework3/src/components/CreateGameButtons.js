import React from 'react';
import PropTypes from 'prop-types';

const CreateGameButtons = ({games}) => {
  const gameButtons = games.map(({description, create}, index) =>
    <button key={index} className='create-game' onClick={create}>{description}</button>
  );

  return (
    <div className='create-game-buttons'>
      {gameButtons}
    </div>
  );
};

CreateGameButtons.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    create: PropTypes.func.isRequired
  })).isRequired
};

export default CreateGameButtons;
