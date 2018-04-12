import React from 'react';
import PropTypes from 'prop-types';

const Result = (props) => {
    return <p className = {props.result.gameState} > {props.result.result} </p>;
};

Result.propTypes = {
   result: PropTypes.shape({
    gameState: PropTypes.string,
    result: PropTypes.string,
   })
};
export default Result;
