import React from 'react';
import RPSGameComponent from '../components/RPS/RpsGame';
import HangmanGameComponent from '../components/Hangman/HangmanGame';
import PropTypes from 'prop-types';

export const Games = (props) => {
    let game = undefined;
    if (props.activeButton === 'rps') {
        game = <RPSGameComponent game = {props.rpsGame} onGuess={props.onGuess} />;
    } else if (props.activeButton === 'hangman') {
        game = <HangmanGameComponent game = {props.hangmanGame} onGuess={props.onGuess}/>;
    }

    return (
        <div className='games'>
            {game}
        </div>
    );
};

Games.propTypes = {
    hangmanGame: PropTypes.shape({
        wrongGuessCount: PropTypes.number.isRequired,
        status: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        letters: PropTypes.array.isRequired,
        won: PropTypes.bool.isRequired,
    }),

    rpsGame: PropTypes.shape({
        moves: PropTypes.array.isRequired,
        status: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        won: PropTypes.bool.isRequired
    }),

    onGuess: PropTypes.func.isRequired,
    activeButton: PropTypes.string.isRequired
};
export default Games;


