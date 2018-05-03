import React from 'react';
import PropTypes from 'prop-types';

const CreateGameButtons = (props) => {
    const buttons = [
        {description: 'Create RPS game', create: 'rps'},
        {description: 'Create Hangman game', create: 'hangman'}
    ];

    const gameButtons = buttons.map(({description, create}, index) =>
        <button key={index} className='create-game' value = {create}
                onClick={()=> props.startNewGameRequest(create)}>
            {description}</button>
    );

    return (
        <div className='create-game-buttons'>
            {gameButtons};
        </div>
    );
};

CreateGameButtons.propTypes = {
    startNewGameRequest: PropTypes.func.isRequired
};

export default CreateGameButtons;
