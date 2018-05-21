import React from 'react';
import {connect} from 'react-redux';
import PlayerContainer from './PlayerContainer';
import propTypes from 'prop-types';

import Games from './GamesContainer';
import GameButtons from './GameButtonsContainer';

const App = (props) => {
  return (
    <div className="app">
      <div className="app-header">
        <h1>Game Lobby</h1>
      </div>
        <PlayerContainer/>
        {(props.players.length > 0)? <GameButtons /> : null}
      <Games />
    </div>
  );
};

App.propTypes = {
    players: propTypes.array.isRequired
};

const mapStateToProps = (state) => ({
    players: state.playerReducer.players,
});


export default connect(mapStateToProps, null)(App);
