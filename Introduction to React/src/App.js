import React from 'react';

import RPSGameComponent from './components/RPS/Game';
import RPS from './games/RPS';

const game = new RPS();

const App = () => {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Game Lobby</h1>
      </div>
      <RPSGameComponent game={game}/>
    </div>
  );
};

export default App;
