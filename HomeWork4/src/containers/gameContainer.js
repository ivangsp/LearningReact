import React, {Component} from 'react';
import {connect} from 'react-redux';
import {hangmanGuessSubmited, newGameStarted, userGuessSubmited} from '../actions';
import RPSGameComponent from './RPS/RpsGame';
import HangmanGameComponent from './Hangman/HangmanGame';
import PropTypes from 'prop-types';

class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.props.startNewGame('HANGMAN');
    }

    render() {
        let activeButton = this.props.activeButton;
        let game = undefined;
        if (activeButton === 'RPS') {
            game = <RPSGameComponent
                status = {this.props.statusRps}
                gameId = {this.props.gameIdRps}
                moves = {this.props.moves}
                userGuessSubmited = {(gameId, guess) => this.props.userGuessSubmited(gameId, guess)}

            />;
        } else {
            game = <HangmanGameComponent
                wrongGuessCount={this.props.wrongGuessCount}
                status = {this.props.statusHangman}
                gameId = {this.props.gameIdHangman}
                guessedLetters = {this.props.guessedLetters}
                userGuessSubmited = {(gameId, guess) => this.props.hangmanGuessSubmited(gameId, guess)}

                />;
        }

        return (
                <div className='games'>
                    {game}
                </div>
        );
    }
}

GameContainer.propTypes = {
    statusRps: PropTypes.string.isRequired,
    moves: PropTypes.array.isRequired,
    gameIdRps: PropTypes.number.isRequired,
    userGuessSubmited: PropTypes.func.isRequired,

    activeButton: PropTypes.string.isRequired,
    startNewGame: PropTypes.func.isRequired,

    hangmanGuessSubmited: PropTypes.func.isRequired,
    wrongGuessCount: PropTypes.number.isRequired,
    statusHangman: PropTypes.string.isRequired,
    gameIdHangman: PropTypes.number.isRequired,
    guessedLetters: PropTypes.array.isRequired,


};


const mapDispatchToProps = (dispatch) =>({

    userGuessSubmited: (gameId, guess) => dispatch(userGuessSubmited(gameId, guess)),
    startNewGame: (gameType) => dispatch(newGameStarted(gameType)),
    hangmanGuessSubmited: (gameId, guess) => dispatch(hangmanGuessSubmited(gameId, guess))

});

const mapStateToProps = (state) => {
    return {
        moves: state.RPSReducer.moves,
        statusRps: state.RPSReducer.status,
        gameIdRps: state.RPSReducer.gameId,
        activeButton: state.AppReducer.activeButton,

        wrongGuessCount: state.HangmanReducer.numWrongGuess,
        statusHangman: state.HangmanReducer.status,
        gameIdHangman: state.HangmanReducer.gameId,
        guessedLetters: state.HangmanReducer.guessedLetters
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
