import React from 'react';
import InputChangesOnSubmit from '../InputChangesOnSubmit';
import HangmanProgress from './HangmanProgress';
import PropTypes from 'prop-types';


export const Game = ({game, onGuess}) => {
    const onSubmit = (guessChar) => {
        onGuess(game.id, 'hangman', guessChar);
    };

    let PlayArea;
    if (game.status !== 'finished') {
        PlayArea = (
            <div className='play-area'>
                <p> Guess a letter from the word: </p>
                <InputChangesOnSubmit onSubmit={onSubmit} type='text'
                                      maxLength={1} submitImmediately={true}/>
            </div>
        );
    }
    return (
        <div className='game hangman'>
            <h3> Hangman </h3>
            {PlayArea}
            <HangmanProgress wrongGuessCount={game.wrongGuessCount}
                             letters={game.letters} />

        </div>
    );
};


Game.propTypes = {
    game: PropTypes.shape({
        wrongGuessCount: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        letters: PropTypes.array.isRequired,
        won: PropTypes.bool.isRequired,
    }),

    onGuess: PropTypes.func.isRequired
};


export default Game;

