import React, {Component} from 'react';

import RPSGameComponent from './RPS/Game';
import RPS from '../games/RPS';
import HangmanGameComponent from './Hangman/Game';
import Hangman from '../games/Hangman';
import CreateGameButtons from '../components/CreateGameButtons';

class App extends Component {
  constructor() {
    super();
    this.state = {games: []};
    this.createRPSGame = this.createRPSGame.bind(this);
    this.createHangmanGame = this.createHangmanGame.bind(this);
  }
  createRPSGame() {
    this.setState({
      games: this.state.games.concat(new RPS())
    });
  }
  createHangmanGame() {
    this.setState({
      games: this.state.games.concat(Hangman.generate())
    });
  }
  render() {
    const games = this.state.games.map((game, index) => {
      if (game instanceof RPS) {
        return <RPSGameComponent key={index} game={game} />;
      } else if (game instanceof Hangman) {
        return <HangmanGameComponent key={index} game={game} />;
      }
    });
    const gameButtons = [
      {description: 'Create RPS game', create: this.createRPSGame},
      {description: 'Create Hangman game', create: this.createHangmanGame}
    ];
    return (
      <div className="app">
        <div className="app-header">
          <h1>Game Lobby</h1>
        </div>
        <CreateGameButtons games={gameButtons} />
        <div className="games">
          {games}
        </div>
      </div>
    );
  }
}

export default App;
