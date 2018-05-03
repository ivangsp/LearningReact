/* eslint-disable react-redux/mapDispatchToProps-prefer-shorthand */
import React from 'react';
import MoveHistory from './MoveHistory';
import InputChangesOnSubmit from '../InputChangesOnSubmit';
import PropTypes from 'prop-types';

const GUESS_CHAR_TO_GUESS = {
    'R': 'ROCK',
    'P': 'PAPER',
    'S': 'SCISSORS'
};

export const Game =({game, onGuess}) => {
    const onSubmit = (guessChar) =>{
        const guess = GUESS_CHAR_TO_GUESS[guessChar];
        if (guess) {
            onGuess(game.id, 'rps', guess);
        } else {
            return;
        }
    };
    let PlayArea;
    if (game.status === 'finished') {
        PlayArea = (
            <p> You won! </p>
        );
    } else {
        PlayArea = (
            <div>
                <p> Guess either Rock(R), Paper(P) or Scissors(S) </p>
                <InputChangesOnSubmit onSubmit={onSubmit} type='text' maxLength={1} />
            </div>
        );
    }
    return (
        <div className='game'>
            <h3> Rock Paper Scissors </h3>
            {PlayArea}
            <MoveHistory moves={game.moves} />
        </div>
    );
};

Game.propTypes = {
    game: PropTypes.shape({
        moves: PropTypes.array.isRequired,
        status: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        won: PropTypes.bool.isRequired
    }),

    onGuess: PropTypes.func.isRequired

};

export default Game;

