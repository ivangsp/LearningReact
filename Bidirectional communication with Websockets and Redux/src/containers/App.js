import React from 'react';

import Games from './GamesContainer';
import GameButtons from './GameButtonsContainer';

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Game Lobby</h1>
      </div>
      <GameButtons />
      <Games />
    </div>
  );
};

export default App;
