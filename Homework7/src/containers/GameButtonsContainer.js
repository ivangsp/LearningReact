import {connect} from 'react-redux';
import CreateGameButtons from '../components/CreateGameButtons';
import {createGameRequested} from '../actions';

const mapDispatchToProps = (dispatch, ownProps) => ({
  createGame: (type) => {
    dispatch(createGameRequested(type));
    ownProps.history.push('/ongoingGames');
  }

});

const mapStateToProps = ({games}) => ({
  createRequestInFlight: games.createGameRequestInFlight
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGameButtons);
