import React, {Component} from 'react';
import InputChangesOnSubmit from '../../components/InputChangesOnSubmit';
import HangmanProgress from '../../components/Hangman/HangmanProgress';
import PropTypes from 'prop-types';


class Game extends Component {
  constructor(props) {
    super(props);
    this.onGuess = this.onGuess.bind(this);
  }

  onGuess(guessChar) {
    this.props.userGuessSubmited(this.props.gameId, guessChar);
  }

  render() {
    let PlayArea;
    if (this.props.status === 'waiting_for_move') {
      PlayArea = (
        <div className='play-area'>
          <p> Guess a letter from the word: </p>
          <InputChangesOnSubmit onSubmit={this.onGuess} type='text'
                                maxLength={1} submitImmediately={true}/>
        </div>
      );
    }
    return (
      <div className='game hangman'>
        <h3> Hangman </h3>
        {PlayArea}
         <HangmanProgress wrongGuessCount={this.props.wrongGuessCount}
                          letters={this.props.guessedLetters} />

      </div>
    );
  }
}

Game.propTypes = {
    wrongGuessCount: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    gameId: PropTypes.number.isRequired,
    guessedLetters: PropTypes.array.isRequired,
    userGuessSubmited: PropTypes.func.isRequired
};

export default Game;

