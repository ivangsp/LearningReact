import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import gameServerMiddleware from './middlewares/GameServerMiddleware';
import onlinePlayersMiddleware from './middlewares/OnlinePlayersMiddleware';
import {createBrowserHistory} from 'history';
import {connectRouter, routerMiddleware} from 'connected-react-router';
import {createLogger} from 'redux-logger';

const history = createBrowserHistory();


// `__REDUX_DEVTOOLS_EXTENSION_COMPOSE__` will make sure that redux devtools
// store enhancher is applied last so that it will not miss any actions. See
// https://redux.js.org/api-reference/applymiddleware#tips for more information.
const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    connectRouter(history)(reducer), // Wrap top level reducer with `connectRouter`
    composeStoreEnhancers(
        applyMiddleware(
            routerMiddleware(history), // Integrate history actions with history API
            thunk,
            createLogger(),
            gameServerMiddleware(),
            onlinePlayersMiddleware
        )
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App history={history}/>
    </Provider>,
    document.getElementById('root')
);
