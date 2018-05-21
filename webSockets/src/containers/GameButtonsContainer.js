import {connect} from 'react-redux';
import CreateGameButtons from '../components/CreateGameButtons';
import {createGameRequested} from '../actions';

const mapDispatchToProps = (dispatch) => ({
  createGame: (type) => dispatch(createGameRequested(type))
});

const mapStateToProps = (state) => ({
  createRequestInFlight: state.gameReducer.createGameRequestInFlight
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateGameButtons);
