import React from 'react';
import PropTypes from 'prop-types';
import HangmanGame from '../components/Hangman/Game';
import RPSGame from '../components/RPS/Game';
import {Redirect} from 'react-router-dom';

const Game = ({games, gameId, onGuess, connected}) => {
    // if (! connected) {
    //     return <Redirect to={'/'} />;
    // }
    const game = games[gameId];
    console.log('>>>', game);

    const onGameGuess = (guess) => {
        onGuess(game.id, guess);
    };

    return (
        <div>
            {
                game === undefined ? <p> Game does not Exist</p> :
                    game.type === 'hangman'? <HangmanGame key={game.id} onGuess={onGameGuess} {...game} />
                        :
                        <RPSGame key={game.id} onGuess={onGameGuess} {...game} />
            }

        </div>

    );
};

Game.propTypes = {
    games: PropTypes.object.isRequired,
    onGuess: PropTypes.func.isRequired,
    gameId: PropTypes.string,
    connected: PropTypes.bool.isRequired

};
export default Game;
