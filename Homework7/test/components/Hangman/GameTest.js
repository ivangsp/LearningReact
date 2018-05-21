import React from 'react';
import {shallow} from 'enzyme';

import HangmanGame from '../../../src/components/Hangman/Game';
import HangmanProgress from '../../../src/components/Hangman/HangmanProgress';
import InputChangesOnSubmit from '../../../src/components/InputChangesOnSubmit';

describe('HangmanGame', () => {
  it('renders InputChangesOnSubmit when waiting for move', () => {
    const result = shallow(
      <HangmanGame
        status='waiting_for_move'
        wrongGuessCount={0}
        letters={[undefined, undefined]}
        onGuess={sinon.stub()}
      />
    );

    expect(result).to.have.descendants(InputChangesOnSubmit);
  });

  it('does not render InputChangesOnSubmit when finished', () => {
    const result = shallow(
      <HangmanGame
        status='finished'
        wrongGuessCount={0}
        letters={[undefined, undefined]}
        onGuess={sinon.stub()}
      />
    );

    expect(result).not.to.have.descendants(InputChangesOnSubmit);
  });

  it('renders HangmanProgress', () => {
    const result = shallow(
      <HangmanGame
        status='waiting_for_move'
        wrongGuessCount={0}
        letters={[undefined, undefined]}
        onGuess={sinon.stub()}
      />
    );

    expect(result).to.have.descendants(HangmanProgress);
  });

  it('disables input when status is guess_in_flight', () => {
    const result = shallow(
      <HangmanGame
        status='guess_in_flight'
        wrongGuessCount={0}
        letters={[undefined, undefined]}
        onGuess={sinon.stub()}
      />
    );

    expect(result.find(InputChangesOnSubmit)).to.have.prop('disabled', true);
  });
});
