import React from 'react';
import PropTypes from 'prop-types';

const RESULT_TO_CLASS_NAME = {
  TIE: 'tie',
  WIN: 'win',
  LOSS: 'loss'
};

const Move = ({guess, opposition, result}) => {
  const resultClass = RESULT_TO_CLASS_NAME[result];

  let text;
  switch (result) {
    case 'TIE': {
      text = <p>You guessed <i>{guess}</i> which tied against <i>{opposition}</i></p>;
      break;
    }
    case 'WIN': {
      text = <p>You guessed <i>{guess}</i> which won against <i>{opposition}</i></p>;
      break;
    }
    case 'LOSS': {
      text = <p>You guessed <i>{guess}</i> which lost against <i>{opposition}</i></p>;
      break;
    }
  }

  return (
    <div className={'move ' + resultClass}>
      {text}
    </div>
  );
};

Move.propTypes = {
  guess: PropTypes.oneOf(['ROCK', 'PAPER', 'SCISSORS']).isRequired,
  opposition: PropTypes.oneOf(['ROCK', 'PAPER', 'SCISSORS']).isRequired,
  result: PropTypes.oneOf(['TIE', 'WIN', 'LOSS']).isRequired,
};

export default Move;
