import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({connected}) => {
    return (<div>

            {connected ?
                <div className="navbar">
                    <ul>
                        <li><Link to={'/createGame'}> createGame </Link></li>
                        <li><Link to={'/players'}> players </Link></li>
                        <li><Link to={'/ongoingGames'}> ongoingGames </Link></li>
                        <li><Link to={'/finishedGames'}> finishedGames </Link></li>
                    </ul>
                </div>
                : null}
        </div>

    );
};

Navbar.propTypes = {
    connected: PropTypes.bool.isRequired,
};
export default Navbar;
