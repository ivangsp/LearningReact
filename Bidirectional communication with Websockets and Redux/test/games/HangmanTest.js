import Hangman from '../../src/games/Hangman';

describe('Hangman', () => {
  let game;
  const targetWord = 'barracuda';
  beforeEach(() => {
    game = new Hangman(targetWord);
  });

  it('starts with 0 wrong guesses', () => {
    expect(game.getWrongGuessCount()).to.eq(0);
  });

  it('starts with all letters unknown', () => {
    expect(game.getGuessedLetters()).to.eql([
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ]);
  });

  it('starts with waiting_for_move status', () => {
    expect(game.getStatus()).to.eq('waiting_for_move');
  });

  it('increases wrong guess count when guessed incorrectly', () => {
    game.guess('f');
    expect(game.getWrongGuessCount()).to.eq(1);
  });

  it('reveals guessed letters in letter status when guessed correctly', () => {
    game.guess('a');
    expect(game.getWrongGuessCount()).to.eq(0);
    expect(game.getGuessedLetters()).to.eql([
      undefined,
      'a',
      undefined,
      undefined,
      'a',
      undefined,
      undefined,
      undefined,
      'a'
    ]);
  });

  it('ends game when guessed incorrectly 6 times', () => {
    game.guess('e');
    game.guess('f');
    game.guess('g');
    game.guess('h');
    game.guess('i');
    expect(game.getStatus()).to.eql('waiting_for_move');
    game.guess('j');
    expect(game.getStatus()).to.eql('lost');
  });

  it('ends game when whole word guessed', () => {
    game.guess('b');
    game.guess('a');
    game.guess('r');
    game.guess('c');
    game.guess('u');
    expect(game.getStatus()).to.eql('waiting_for_move');
    game.guess('d');
    expect(game.getStatus()).to.eql('won');
  });
});
