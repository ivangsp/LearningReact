import React from 'react';
import {shallow, render} from 'enzyme';

import Games from '../../src/components/Games';
import HangmanGame from '../../src/components/Hangman/Game';
import RPSGame from '../../src/components/RPS/Game';

describe('Games', () => {
  it('renders nothing when no games', () => {
    expect(render(<Games games={[]} onGuess={sinon.stub()}/>).html()).to.eql(
      ''
    );
  });

  it('renders Hangman Game when hangman game', () => {
    const games = [{
      id: 1,
      type: 'hangman',
      wrongGuessCount: 0,
      letters: [],
      status: 'waiting_for_move'
    }];
    expect(shallow(<Games games={games} onGuess={sinon.stub()} />))
      .to.have.exactly(1).descendants(HangmanGame);
  });

  it('renders RPS Game when hangman game', () => {
    const games = [{
      id: 1,
      type: 'rps',
      moves: [],
      status: 'waiting_for_move'
    }];
    expect(shallow(<Games games={games} onGuess={sinon.stub()} />))
      .to.have.exactly(1).descendants(RPSGame);
  });

  it('calls onGuess with game id when guessed', () => {
    const onGuess = sinon.stub();
    const games = [{
      id: 1,
      type: 'rps',
      moves: [],
      status: 'waiting_for_move'
    }];
    const result = shallow(<Games games={games} onGuess={onGuess} />);
    result.find(RPSGame).props().onGuess('R');
    expect(onGuess).to.have.been.calledWith(1, 'R');
  });
});
