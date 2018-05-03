import React from 'react';
import {shallow} from 'enzyme';

import RPSGame from '../../../src/components/RPS/RpsGame';
import InputChangesOnSubmit from '../../../src/components/InputChangesOnSubmit';

const game = {
    id: 'hi23ko',
    status: 'waiting_for_move',
    moves: [],
    won: false
};

describe('RPSGame', () => {
  it('renders InputChangesOnSubmit when waiting for move', () => {
    const result = shallow(
      <RPSGame onGuess={sinon.stub()} game = {game}/>
    );

    expect(result).to.have.descendants(InputChangesOnSubmit);
  });

  it('does not render InputChangesOnSubmit when finished', () => {
      const game = {
          id: 'hi23ko',
          status: 'finished',
          moves: [],
          won: false
      };
      const result = shallow(<RPSGame game = {game} onGuess={sinon.stub()} />);
      expect(result).not.to.have.descendants(InputChangesOnSubmit);
  });
});
