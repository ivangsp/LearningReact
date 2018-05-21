import React from 'react';
import PropTypes from 'prop-types';

const gameButtons = [
  {description: 'Create RPS game', type: 'rps'},
  {description: 'Create Hangman game', type: 'hangman'}
];

const CreateGameButtons = ({createGame, createRequestInFlight}) => {
  const buttons = gameButtons.map(({description, type}, index) =>
    <button
      key={index}
      className='create-game'
      onClick={() => createGame(type)}
      disabled={createRequestInFlight}
    >
      {description}
    </button>
  );

  return (
    <div className='create-game-buttons'>
      {buttons}
      {createRequestInFlight ? <div>Creating...</div> : null}
    </div>
  );
};

CreateGameButtons.propTypes = {
  createGame: PropTypes.func.isRequired,
  createRequestInFlight: PropTypes.bool.isRequired
};

export default CreateGameButtons;
