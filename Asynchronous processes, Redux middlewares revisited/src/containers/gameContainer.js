import {connect} from 'react-redux';
import {Games} from '../components/Games';
import {startNewGameRequest, gameGuessRequested} from '../middlewares/GameServerMiddleware';

const mapDispatchToProps = (dispatch) =>({
    startNewGameRequest: (gameType) => dispatch(startNewGameRequest(gameType)),
    onGuess: (id, gameType, guessChar) => dispatch(gameGuessRequested(id, gameType, guessChar))

});

const mapStateToProps = (state) => {
    return {
        rpsGame: state.RPSReducer,
        hangmanGame: state.HangmanReducer,
        activeButton: state.BtnReducer.activeButton
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Games);

