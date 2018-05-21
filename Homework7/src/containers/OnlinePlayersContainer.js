import {connect} from 'react-redux';
import OnlinePlayers from '../components/OnlinePlayers';

const mapStateToProps = ({connection}) => ({
  players: connection.onlinePlayers,
  selfId: connection.playerId
});

const mapDispatchToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(OnlinePlayers);
