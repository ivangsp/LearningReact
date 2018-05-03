import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import App from './containers/App';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import {gameServerMiddleware} from './middlewares/GameServerMiddleware';

const composeStoreEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(
    reducer,
    composeStoreEnhancers(
        applyMiddleware(thunk, gameServerMiddleware, createLogger())
    )
);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);

