import RPS,
  {ROCK, PAPER, SCISSORS, TIE, WIN, LOSS}
from '../../src/games/RPS';

describe('RPS', () => {
  it('reports tie when opposition and guess are same', () => {
    [ROCK, PAPER, SCISSORS].forEach((guess) => {
      const generateOpposition = () => guess;
      const game = new RPS(generateOpposition);
      game.guess(guess);
      expect(game.getMoves()).to.eql([{
        result: TIE, guess: guess, opposition: guess
      }]);
    });
  });

  it('reports WIN when ROCK guessed versus SCISSORS', () => {
    const generateOpposition = () => SCISSORS;
    const game = new RPS(generateOpposition);
    game.guess(ROCK);
    expect(game.getMoves()).to.eql([{
      result: WIN, guess: ROCK, opposition: SCISSORS
    }]);
    expect(game.getStatus()).to.eql('finished');
  });

  it('reports WIN when SCISSORS guessed versus PAPER', () => {
    const generateOpposition = () => PAPER;
    const game = new RPS(generateOpposition);
    game.guess(SCISSORS, generateOpposition);
    expect(game.getMoves()).to.eql([{
      result: WIN, guess: SCISSORS, opposition: PAPER
    }]);
    expect(game.getStatus()).to.eql('finished');
  });

  it('reports WIN when PAPER guessed versus ROCK', () => {
    const generateOpposition = () => ROCK;
    const game = new RPS(generateOpposition);
    game.guess(PAPER);
    expect(game.getMoves()).to.eql([{
      result: WIN, guess: PAPER, opposition: ROCK
    }]);
    expect(game.getStatus()).to.eql('finished');
  });

  it('reports LOSS when PAPER guessed versus SCISSORS', () => {
    const generateOpposition = () => SCISSORS;
    const game = new RPS(generateOpposition);
    game.guess(PAPER);
    expect(game.getMoves()).to.eql([{
      result: LOSS, guess: PAPER, opposition: SCISSORS
    }]);
  });

  it('reports LOSS when SCISSORS guessed versus ROCK', () => {
    const generateOpposition = () => ROCK;
    const game = new RPS(generateOpposition);
    game.guess(SCISSORS);
    expect(game.getMoves()).to.eql([{
      result: LOSS, guess: SCISSORS, opposition: ROCK
    }]);
  });

  it('reports LOSS when ROCK guessed versus PAPER', () => {
    const generateOpposition = () => PAPER;
    const game = new RPS(generateOpposition);
    game.guess(ROCK);
    expect(game.getMoves()).to.eql([{
      result: LOSS, guess: ROCK, opposition: PAPER
    }]);
  });
});
