import React from 'react';
import {shallow} from 'enzyme';

import Game from '../../../src/containers/Hangman/Game';
import HangmanProgress from '../../../src/components/Hangman/HangmanProgress';
import InputChangesOnSubmit from '../../../src/components/InputChangesOnSubmit';
import Hangman from '../../../src/games/Hangman';

describe('Hangman/Game', () => {
  let hangman;
  beforeEach(() => {
    hangman = new Hangman('cod');
  });

  it('creates moves when guess submitted', () => {
    const result = shallow(<Game game={hangman} />);
    result.find(InputChangesOnSubmit).props().onSubmit('p');
    result.find(InputChangesOnSubmit).props().onSubmit('c');
    result.update();
    expect(result).to.contain(
      <HangmanProgress
      wrongGuessCount={1}
      letters={[
        'c',
        undefined,
        undefined
      ]}
      />
    );
  });

  it('initially has input', () => {
    const result = shallow(<Game game={hangman} />);
    expect(result).to.have.exactly(1).descendants(InputChangesOnSubmit);
  });

  it('does not have input after guessing correctly', () => {
    const result = shallow(<Game game={hangman} />);
    const onSubmit = result.find(InputChangesOnSubmit).props().onSubmit;
    onSubmit('c');
    onSubmit('o');
    onSubmit('d');
    result.update();
    expect(result).not.to.have.descendants(InputChangesOnSubmit);
  });
});
