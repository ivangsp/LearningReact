import Buttons from '../components/CreateGameButtons';
import {newGameStarted} from '../actions';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) =>({
    startNewGame: (gameType) => dispatch(newGameStarted(gameType))
});

const mapStateToProps = (state) => {
    return {
        activeButton: state.AppReducer.activeButton
    };
};


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Buttons);
