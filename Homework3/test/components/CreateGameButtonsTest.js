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
      {description: 'foo', create: sinon.stub()},
      {description: 'bar', create: sinon.stub()},
    ];
    const result = shallow(<CreateGameButtons games={games} />);
    expect(result).to.have.exactly(2).descendants('button');
  });

  it('calls create callback when button clicked', () => {
    const games = [
      {description: 'foo', create: sinon.stub()},
      {description: 'bar', create: sinon.stub()},
    ];
    const result = shallow(<CreateGameButtons games={games} />);
    result.find('button').first().simulate('click');
    expect(games[0].create).to.have.been.calledOnce;
  });
});
