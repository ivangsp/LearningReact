import React, {Component} from 'react';
import InputChangesOnSubmit from '../../components/InputChangesOnSubmit';
import HangmanProgress from '../../components/Hangman/HangmanProgress';
import PropTypes from 'prop-types';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.game.getStatus(),
      wrongGuessCount: props.game.getWrongGuessCount(),
      guessedLetters: props.game.getGuessedLetters()
    };
    this.onGuess = this.onGuess.bind(this);
  }

  onGuess(guessChar) {
    this.props.game.guess(guessChar);
    this.setState({
      status: this.props.game.getStatus(),
      wrongGuessCount: this.props.game.getWrongGuessCount(),
      guessedLetters: this.props.game.getGuessedLetters()
    });
  }

  render() {
    let PlayArea;
    const game = this.props.game;

    if (game.getStatus() === 'waiting_for_move') {
      PlayArea = (
        <div className='play-area'>
          <p> Guess a letter from the word: </p>
          <InputChangesOnSubmit onSubmit={this.onGuess} type='text' maxLength={1} submitImmediately={true}/>
        </div>
      );
    }
    return (
      <div className='game hangman'>
        <h3> Hangman </h3>
        {PlayArea}
        <HangmanProgress wrongGuessCount={this.state.wrongGuessCount} letters={this.state.guessedLetters} />
      </div>
    );
  }
}

Game.propTypes = {
  game: PropTypes.shape({
    guess: PropTypes.func.isRequired,
    getWrongGuessCount: PropTypes.func.isRequired,
    getGuessedLetters: PropTypes.func.isRequired,
    getStatus: PropTypes.func.isRequired
  })
};

export default Game;
