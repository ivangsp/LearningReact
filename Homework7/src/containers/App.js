import React from 'react';
import PropTypes from 'prop-types';

import Games from './GamesContainer';
import Header from '../components/Header';
import OnlinePlayers from './OnlinePlayersContainer';
import ConnectionState from './ConnectionStateContainer';
import {connect} from 'react-redux';
import NavBar from '../components/NavBar';
import GameButtons from '../containers/GameButtonsContainer';
import OnGoingGames from './OnGoingGamesContainer';
import FinishedGameContainer from './FinishedGameContainer';
import {Route} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';

export const AppComponent = ({history, connected}) => {
    return (
        <ConnectedRouter history={history}>
            <div>
                <Header />
                <ConnectionState />
                <NavBar connected={connected}/>
                <Route path='/games/:id' component ={Games} />
                <Route path='/players' component ={OnlinePlayers} />
                <Route path='/createGame' component ={GameButtons} />
                <Route path='/ongoingGames' component ={OnGoingGames} />
                <Route path='/finishedGames' component ={FinishRouteeContainer} />
            </div>
        </ConnectedRouter>
    );
};

AppComponent.propTypes = {
    history: PropTypes.object.isRequired,
    connected: PropTypes.bool.isRequired
};

const mapStateToProps = ({connection}) => ({
    connected: (connection.connectionState === 'connection_accepted')
});

const mapDispatchToProps = undefined;

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);

