import React from 'react';
import {Link, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


const FinishedGames = ({games, connected}) => {
    if (! connected) {
        return <Redirect to='/' />;
    }
    const game = games.map((game, index) => {
        if (game.status === 'finished') {
            return <p key={game.id}> <Link to={`/games/${game.id}`}>
                GameType: {game.type}  Status: {game.status} </Link>
                </p>;
        }
    });
    return (
        <div>
            {(game.length > 0) ? game : <p>You currently have no finished games!</p>}

        </div>

    );
};


FinishedGames.propTypes = {
    games: PropTypes.array.isRequired,
    connected: PropTypes.bool.isRequired
};

const mapStateToProps = ({games, connection}) => ({
    games: Object.values(games.games).sort((id1, id2) => id2 - id1),
    connected: (connection.connectionState === 'connection_accepted')

});

const mapDispatchToProps = undefined;


export default connect(mapStateToProps, mapDispatchToProps)(FinishedGames);
