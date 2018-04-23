import React from 'react';
import ButtonsContainer from './buttonContainer';
import GameContainer from './gameContainer';

const App = () => {
    const gameButtons = [
        {description: 'Create RPS game', create: 'RPS'},
        {description: 'Create Hangman game', create: 'HANGMAN'}
    ];

    return (
        <div className='app'>
            <div className='app-header'>
                <h1>Game Lobby</h1>
            </div>
            <div className='create-game-buttons'>
                <ButtonsContainer games = {gameButtons} />
            </div>
            <GameContainer/>
        </div>
    );
};
export default App;
