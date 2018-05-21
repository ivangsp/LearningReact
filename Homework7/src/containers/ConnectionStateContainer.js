import {connect} from 'react-redux';
import {
  CONNECT,
  DISCONNECT,
} from '../actions';
import ConnectionState from '../components/ConnectionState';

const mapStateToProps = ({connection}) => ({
  connectionState: connection.connectionState,
  disconnectReason: connection.disconnectReason
});

const mapDispatchToProps = (dispatch) => ({
  connect: ({playerName}) => dispatch({type: CONNECT, payload: {playerName}}),
  disconnect: () => dispatch({type: DISCONNECT})
});

export default connect(mapStateToProps, mapDispatchToProps)(ConnectionState);
