import React from 'react';
import ButtonsContainer from './buttonContainer';
import GameContainer from './gameContainer';

const App = () => {
    return (
        <div className='app'>
            <div className='app-header'>
                <h1>Game Lobby</h1>
            </div>
            <div className='create-game-buttons'>
                <ButtonsContainer />
            </div>
            <GameContainer/>
        </div>
    );
};
export default App;
