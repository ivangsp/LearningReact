import React from 'react';
import PropTypes from 'prop-types';

const FailureProgress = ({wrongGuessCount}) => {
  return (
    <span className='failure-progress'>
      <img src={`images/Hangman-${wrongGuessCount}.png`} />
    </span>
  );
};

FailureProgress.propTypes = {
  wrongGuessCount: PropTypes.number.isRequired
};

const LetterProgress = ({letters}) => {
  const letterList = letters.map((l, index) => {
    if (l === undefined) {
      return <span key={index} className='placeholder'>_</span>;
    } else {
      return <span key={index} className='letter'>{l}</span>;
    }
  });

  return <div className='letters'>{letterList}</div>;
};

LetterProgress.propTypes = {
  letters: PropTypes.arrayOf(PropTypes.string).isRequired
};

const Progress = (props) => {
  return (
    <div>
      <LetterProgress {...props} />
      <FailureProgress {...props} />
    </div>
  );
};

export default Progress;
