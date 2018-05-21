import React from 'react';
import {render} from 'enzyme';

import HangmanProgress from '../../../src/components/Hangman/HangmanProgress';

describe('HangmanProgress', () => {
  it('renders starting position with all dashes initially', () => {
    const result =
      render(<HangmanProgress wrongGuessCount={0} letters={[undefined, undefined]} />);

    expect(result.find('img')).to.have.attr('src', 'images/Hangman-0.png');
    expect(result).to.have.exactly(2).descendants('.placeholder');
    expect(result).not.to.have.descendants('.letter');
  });

  it('renders in progress position with appropriate image and letters', () => {
    const result =
      render(<HangmanProgress wrongGuessCount={3} letters={[undefined, 'a', 'r']} />);

    expect(result.find('img')).to.have.attr('src', 'images/Hangman-3.png');
    expect(result).to.have.exactly(1).descendants('.placeholder');
    expect(result).to.have.exactly(2).descendants('.letter');
  });
});
