import Buttons from '../components/CreateGameButtons';
import {startNewGameRequest} from '../middlewares/GameServerMiddleware';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) =>({
    startNewGameRequest: (gameType) => dispatch(startNewGameRequest(gameType))
});

const mapStateToProps = undefined;


export default connect(mapStateToProps, mapDispatchToProps)(Buttons);
