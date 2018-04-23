import React from 'react';
import {shallow} from 'enzyme';

import MoveHistory from '../../../src/components/RPS/MoveHistory';
import Move from '../../../src/components/RPS/Move';

describe('RPS/MoveHistory', () => {
  it('renders no moves when empty moves', () => {
    const result = shallow(<MoveHistory moves={[]} />);
    expect(result).not.to.have.descendants(Move);
  });

  it('renders moves when there are some', () => {
    const result = shallow(
      <MoveHistory moves={[
        {guess: 'ROCK', opposition: 'ROCK', result: 'TIE'},
        {guess: 'PAPER', opposition: 'ROCK', result: 'WIN'}
      ]}
    />);
    expect(result).to.have.exactly(2).descendants(Move);
  });
});
