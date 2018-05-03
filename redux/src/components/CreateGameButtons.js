import React from 'react';
import PropTypes from 'prop-types';

const CreateGameButtons = (props) => {
  const gameButtons = props.games.map(({description, create}, index) =>
    <button key={index} className='create-game' value = {create}
            onClick={()=> props.startNewGame(create)}>
        {description}</button>
  );

  return (
    <div className='create-game-buttons'>
      {gameButtons};
    </div>
  );
};

CreateGameButtons.propTypes = {
  games: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    create: PropTypes.string.isRequired
   })).isRequired,
    numWrongGuess: PropTypes.number,
    statusRps: PropTypes.string,
};

export default CreateGameButtons;
