import React from 'react';
import {shallow} from 'enzyme';

import Game from '../../../src/containers/RPS/Game';
import MoveHistory from '../../../src/components/RPS/MoveHistory';
import InputChangesOnSubmit from '../../../src/components/InputChangesOnSubmit';
import RPS,
  {LOSS, PAPER, SCISSORS}
from '../../../src/games/RPS';

describe('RPS/Game', () => {
  const generateOpposition = () => SCISSORS;
  let rps;
  beforeEach(() => {
    rps = new RPS(generateOpposition);
  });

  it('creates moves when guess submitted', () => {
    const result = shallow(<Game game={rps} />);
    result.find(InputChangesOnSubmit).props().onSubmit('P');
    result.update();
    expect(result).to.contain(
      <MoveHistory moves={[{result: LOSS, guess: PAPER, opposition: SCISSORS}]} />
    );
  });

  it('initially has input', () => {
    const result = shallow(<Game game={rps} />);
    expect(result).to.have.exactly(1).descendants(InputChangesOnSubmit);
  });

  it('does not have input after winning', () => {
    const result = shallow(<Game game={rps} />);
    result.find(InputChangesOnSubmit).props().onSubmit('R');
    result.update();
    expect(result).not.to.have.descendants(InputChangesOnSubmit);
  });
});
