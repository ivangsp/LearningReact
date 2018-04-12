import React from 'react';
import ReactDOM from 'react-dom';
import HangmanApp from './containers/hangmanApp';
import RPSApp from './containers/RPSApp';


let currentApp = <HangmanApp />;
if (document.location.search.match(/progress=rps/)) {
  currentApp = <RPSApp />;
}

ReactDOM.render(currentApp, document.getElementById('root'));
