import {connect} from 'react-redux';
import Games from '../components/Games';
import {gameGuessRequested} from '../actions';

const mapStateToProps = ({games}) => ({
  games: Object.values(games).sort((id1, id2) => id1 - id2)
});

const mapDispatchToProps = (dispatch) => ({
  onGuess: (gameId, guess) => dispatch(gameGuessRequested({gameId, guess}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Games);
