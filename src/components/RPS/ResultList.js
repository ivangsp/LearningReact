import React from 'react';
import PropTypes from 'prop-types';
import Result from './Result';

const ResultList = (props) => {
    const res = props.results.reverse();
    const result = res.map((result) => {
        return (
            <Result result = {result} key={props.results.indexOf(result)} />
        );
    });

    // starts a new game after wining
    function startNewGame() {
        props.startNewGame();
    }

    // displays the start again button when the user wins the game
    const win = props.win;
    const output = ! win ? (
        <div className='results'>
            {props.results.length >0 ? (<p> Previous Results</p>) : null }
            {result}
        </div>
    ) : (
        <div className='results' >
            <p> Previous Results:</p>
            {result}
            <button id='submitBtn' onClick = {() => startNewGame()}> Play again </button>
        </div>
        );

    // display output
    return (
        <div>
            {output}
        </div>
    );
};

ResultList.propTypes = {
  results: PropTypes.arrayOf(PropTypes.shape({
    result: PropTypes.string,
    gameState: PropTypes.string
  })),
  win: PropTypes.bool,
  startNewGame: PropTypes.func

};


export default ResultList;
