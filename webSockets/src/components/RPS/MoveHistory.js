import React from 'react';
import Move from './Move';
import PropTypes from 'prop-types';

const MoveHistory = ({moves}) => {
  const moveHistory = moves.map((move, index) =>
    <Move
      guess={move.guess}
      opposition={move.opposition}
      result={move.result}
      key={index}
    />
  );

  if (moveHistory.length === 0) {
    return (<div className='move-history'/>);
  } else {
    return (
      <div className='move-history'>
        <p>Previous moves:</p>
        <div className='move-list'>
          {moveHistory}
        </div>
      </div>
    );
  }
};

MoveHistory.propTypes = {
  moves: PropTypes.array.isRequired
};

export default MoveHistory;
