/* eslint-disable react-redux/mapDispatchToProps-prefer-shorthand */
import React from 'react';
import MoveHistory from '../../components/RPS/MoveHistory';
import InputChangesOnSubmit from '../../components/InputChangesOnSubmit';
import PropTypes from 'prop-types';

const GUESS_CHAR_TO_GUESS = {
    'R': 'ROCK',
    'P': 'PAPER',
    'S': 'SCISSORS'
};

export const Game =(props) => {
    const onGuess = (guessChar) =>{
        const guess = GUESS_CHAR_TO_GUESS[guessChar];
        if (guess) {
            props.userGuessSubmited(props.gameId, guess);
        } else {
            return;
        }
    };

    let PlayArea;
    if (props.status === 'finished') {
        PlayArea = (
            <p> You won! </p>
        );
    } else {
        PlayArea = (
            <div>
                <p> Guess either Rock(R), Paper(P) or Scissors(S) </p>
                <InputChangesOnSubmit onSubmit={(guess) => onGuess(guess)} type='text' maxLength={1} />
            </div>
        );
    }
    return (
        <div className='game'>
            <h3> Rock Paper Scissors </h3>
            {PlayArea}
            <MoveHistory moves={props.moves} />
        </div>
    );
};

Game.propTypes = {
    moves: PropTypes.array.isRequired,
    status: PropTypes.string.isRequired,
    gameId: PropTypes.number.isRequired,
    userGuessSubmited: PropTypes.func.isRequired

};

export default Game;

