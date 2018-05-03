import React from 'react';
import {shallow} from 'enzyme';

import CreateGameButtons from '../../src/components/CreateGameButtons';

describe('CreateGameButtons', () => {
  it('calls createGame callback with type rps game when rps button button clicked', () => {
    const createGame = sinon.stub();
    const result = shallow(<CreateGameButtons startNewGameRequest={createGame}/>);
    result.find('button').at(0).simulate('click');
    expect(createGame).to.have.been.calledWith('rps');
  });

  it('calls createGame callback with type hangman game when hangman button button clicked', () => {
    const createGame = sinon.stub();
    const result = shallow(<CreateGameButtons startNewGameRequest={createGame}/>);
    result.find('button').at(1).simulate('click');
    expect(createGame).to.have.been.calledWith('hangman');
  });
});
