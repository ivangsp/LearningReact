import React from 'react';
import {shallow} from 'enzyme';

import CreateGameButtons from '../../src/components/CreateGameButtons';

describe('CreateGameButtons', () => {
  it('creates no buttons when no games', () => {
    const result = shallow(<CreateGameButtons games={[]} />);
    expect(result).not.to.have.descendants('button');
  });

  it('creates buttons when games', () => {
    const games = [
      {description: 'foo', create: 'RPS'},
      {description: 'bar', create: 'HANGMAN'},
    ];
    const result = shallow(<CreateGameButtons games={games} />);
    expect(result).to.have.exactly(2).descendants('button');
  });
});
