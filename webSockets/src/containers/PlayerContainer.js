import {connect} from 'react-redux';
import Players from '../components/Players/Players';
import {connectUser, disconnect} from '../actions/index';

const mapStateToProps = (state) => ({
    players: state.playerReducer.players,
    userId: state.playerReducer.user_id,
    connecting: state.playerReducer.connecting,
    connected: state.playerReducer.connected,
    error: state.playerReducer.error
});

const mapDispatchToProps = (dispatch) => ({
    connect: (userName) => dispatch(connectUser(userName)),
    disconnect: () => dispatch(disconnect())
});

export default connect(mapStateToProps, mapDispatchToProps)(Players);
