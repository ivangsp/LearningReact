import React from 'react';
import {shallow} from 'enzyme';

import RPSGame from '../../../src/components/RPS/Game';
import InputChangesOnSubmit from '../../../src/components/InputChangesOnSubmit';

describe('RPSGame', () => {
  it('renders InputChangesOnSubmit when waiting for move', () => {
    const result = shallow(
      <RPSGame
        status='waiting_for_move'
        moves={[]}
        onGuess={sinon.stub()}
      />
    );

    expect(result).to.have.descendants(InputChangesOnSubmit);
  });

  it('does not render InputChangesOnSubmit when finished', () => {
    const result = shallow(
      <RPSGame
        status='finished'
        moves={[]}
        onGuess={sinon.stub()}
      />
    );

    expect(result).not.to.have.descendants(InputChangesOnSubmit);
  });

  it('calls onGuess when letter submitted', () => {
    const onGuess = sinon.stub();
    const result = shallow(
      <RPSGame
        status='waiting_for_move'
        moves={[]}
        onGuess={onGuess}
      />
    );
    result.find(InputChangesOnSubmit).props().onSubmit('R');
    expect(onGuess).to.have.been.calledWith('ROCK');
  });

  it('disables input when status is guess_in_flight', () => {
    const result = shallow(
      <RPSGame
        status='guess_in_flight'
        moves={[]}
        onGuess={sinon.stub()}
      />
    );

    expect(result.find(InputChangesOnSubmit)).to.have.prop('disabled', true);
  });
});
