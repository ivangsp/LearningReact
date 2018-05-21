import React from 'react';
import {shallow} from 'enzyme';

import CreateGameButtons from '../../src/components/CreateGameButtons';

describe('CreateGameButtons', () => {
  it('calls createGame callback with type rps game when rps button button clicked', () => {
    const createGame = sinon.stub();
    const result = shallow(<CreateGameButtons createGame={createGame} createRequestInFlight={false}/>);
    result.find('button').at(0).simulate('click');
    expect(createGame).to.have.been.calledWith('rps');
  });

  it('calls createGame callback with type hangman game when hangman button button clicked', () => {
    const createGame = sinon.stub();
    const result = shallow(<CreateGameButtons createGame={createGame} createRequestInFlight={false} />);
    result.find('button').at(1).simulate('click');
    expect(createGame).to.have.been.calledWith('hangman');
  });

  it('disables buttons when createRequestInFlight', () => {
    const result = shallow(<CreateGameButtons createGame={sinon.stub()} createRequestInFlight={true}/>);

    expect(result).to.have.exactly(2).descendants('button[disabled]');
  });
});
