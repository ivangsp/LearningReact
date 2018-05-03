import React from 'react';
import {shallow} from 'enzyme';

import HangmanGame from '../../../src/components/Hangman/HangmanGame';
import HangmanProgress from '../../../src/components/Hangman/HangmanProgress';
import InputChangesOnSubmit from '../../../src/components/InputChangesOnSubmit';
import * as sinon from 'sinon';

const game = {
    id: 'hi23ko',
    status: 'waiting_for_move',
    wrongGuessCount: 0,
    guessedLetters: [undefined, undefined]
};
describe('HangmanGame', () => {
  it('renders InputChangesOnSubmit when waiting for move', () => {
    const result = shallow(<HangmanGame game = {game} onGuess={sinon.stub()}/>);

    expect(result).to.have.descendants(InputChangesOnSubmit);
  });

  it('does not render InputChangesOnSubmit when finished', () => {
      const game = {
          id: 'hi23ko',
          status: 'finished',
          wrongGuessCount: 0,
          guessedLetters: [undefined, undefined]
      };
    const result = shallow(<HangmanGame game = {game} onGuess={sinon.stub()}/>);
    expect(result).not.to.have.descendants(InputChangesOnSubmit);
  });

  it('renders HangmanProgress', () => {
      const result = shallow(<HangmanGame game = {game} onGuess={sinon.stub()}/>);

    expect(result).to.have.descendants(HangmanProgress);
  });
});
