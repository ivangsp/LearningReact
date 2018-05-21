import {connect} from 'react-redux';
import Game from '../components/Game';
import {gameGuessRequested} from '../actions';

const mapStateToProps = (state, ownProps) => ({
    games: state.games.games,
    gameId: ownProps.match.params.id,
    connected: state.connection.connectionState === 'connection_accepted'


});

const mapDispatchToProps = (dispatch) => ({
    onGuess: (gameId, guess) => dispatch(gameGuessRequested({gameId, guess}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
