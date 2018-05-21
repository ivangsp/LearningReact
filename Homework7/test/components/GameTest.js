import React from 'react';
import {shallow, render} from 'enzyme';

import Games from '../../src/components/Game';
import HangmanGame from '../../src/components/Hangman/Game';
import RPSGame from '../../src/components/RPS/Game';
import {Redirect} from 'react-router-dom';


describe('Games', () => {
  it('redirects when no user is connected', () => {
  const wrapper = shallow(<Games games={[]} onGuess={sinon.stub()} connected={false} gameId ={1}/>);
    expect(wrapper).to.have.exactly(1).descendants(Redirect);
  });

  it('renders Games do not Exist when no games no game in progress', () => {
    expect(render(<Games games={[]} onGuess={sinon.stub()} connected={true} gameId ={1}/>).html()).to.eql(
      '<p> Game does not Exist</p>'
    );
  });

  it('renders Hangman Game when hangman game', () => {
    const games = {1: {
      id: 1,
      type: 'hangman',
      wrongGuessCount: 0,
      letters: [],
      status: 'waiting_for_move'
    }};
    expect(shallow(<Games games={games} onGuess={sinon.stub()} connected={true} gameId ={1}/>))
      .to.have.exactly(1).descendants(HangmanGame);
  });

  it('renders RPS Game when hangman game', () => {
    const games = {1: {
      id: 1,
      type: 'rps',
      moves: [],
      status: 'waiting_for_move'
    }};
    expect(shallow(<Games games={games} onGuess={sinon.stub()} connected={true} gameId ={1} />))
      .to.have.exactly(1).descendants(RPSGame);
  });

  it('calls onGuess with game id when guessed', () => {
    const onGuess = sinon.stub();
    const games = {1: {
      id: 1,
      type: 'rps',
      moves: [],
      status: 'waiting_for_move'
    }};
    const result = shallow(<Games games={games} onGuess={onGuess} connected={true} gameId ={1} />);
    result.find(RPSGame).props().onGuess('R');
    expect(onGuess).to.have.been.calledWith(1, 'R');
  });
});
