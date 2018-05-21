import React from 'react';
import {render} from 'enzyme';

import Move from '../../../src/components/RPS/Move';

describe('RPS/Move', () => {
  it('has TIE if tied', () => {
    const result = render(
      <Move
        guess='PAPER'
        opposition='PAPER'
        result='TIE'
      />);
    expect(result.find('p').html()).to.eql(
      'You guessed <i>PAPER</i> which tied against <i>PAPER</i>'
    );
  });

  it('has LOSS if lost', () => {
    const result = render(
      <Move
        guess='SCISSORS'
        opposition='ROCK'
        result='LOSS'
      />);
    expect(result.find('p').html()).to.eql(
      'You guessed <i>SCISSORS</i> which lost against <i>ROCK</i>'
    );
  });

  it('has WIN if won', () => {
    const result = render(
      <Move
        guess='PAPER'
        opposition='ROCK'
        result='WIN'
      />);
    expect(result.find('p').html()).to.eql(
      'You guessed <i>PAPER</i> which won against <i>ROCK</i>'
    );
  });
});
