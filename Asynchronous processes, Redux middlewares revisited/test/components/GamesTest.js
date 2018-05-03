import React from 'react';
import {shallow, render} from 'enzyme';
import Game from '../../src/components/Games';
import HangmanGame from '../../src/components/Hangman/HangmanGame';
import RPSGame from '../../src/components/RPS/RpsGame';

describe('Games', () => {
  it('renders nothing when no games', () => {
    expect(render(<Game game={{}} onGuess={sinon.stub()} activeButton={''}/>).html()).to.eql(
      ''
    );
  });

  it('renders Hangman Game when hangman game', () => {
    const games = {
      id: 1,
      type: 'hangman',
      wrongGuessCount: 0,
      guessedLetters: [],
      status: 'waiting_for_move',
    };
    expect(shallow(<Game game={games} onGuess={sinon.stub()} activeButton={'hangman'}/>))
      .to.have.exactly(1).descendants(HangmanGame);
  });
  it('renders RPS Game when hangman game', () => {
    const games = {
      id: 1,
      type: 'rps',
      moves: [],
      status: 'waiting_for_move'
    };
    expect(shallow(<Game game={games} onGuess={sinon.stub()} activeButton={'rps'}/>))
      .to.have.exactly(1).descendants(RPSGame);
  });


  it('calls onGuess with game id when guessed', () => {
    const onGuess = sinon.stub();
    const games = {
      id: 1,
      type: 'rps',
      moves: [],
      status: 'waiting_for_move'
    };
    const result = shallow(<Game games={games} onGuess={onGuess} activeButton={'rps'}/>);
    result.find(RPSGame).props().onGuess('R');
    expect(onGuess).to.have.been.calledWith('R');
  });
});
