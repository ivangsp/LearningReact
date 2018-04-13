/* global sinon */
import React from 'react';
import {shallow} from 'enzyme';

import UserGuess from '../../../src/components/hangman/UserGuess';

describe('UserGuess', () => {
  it('renders', () => {
    expect(shallow(
      <UserGuess gameState='finished' submitGuess={sinon.stub()} >text</UserGuess>
    )).to.exist;
  });

  it('renders contained element', () => {
    expect(shallow(
      <UserGuess gameState='finished' submitGuess={sinon.stub()} >contained</UserGuess>
    )).to.include.text('Guess a letter from the word');
  });

  it('has one p, one inputs', () => {
    const form = shallow(<UserGuess gameState='finished' submitGuess={sinon.stub()} text='text' />);
    expect(form).to.have.exactly(1).descendants('input');
    expect(form.find('input').length).to.eq(1);
  });
});

