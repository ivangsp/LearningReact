export const ROCK = 'ROCK';
export const PAPER = 'PAPER';
export const SCISSORS = 'SCISSORS';

const POSSIBLE_MOVES = [ROCK, PAPER, SCISSORS];

export const TIE = 'TIE';
export const WIN = 'WIN';
export const LOSS = 'LOSS';

class RPS {
  constructor(generateOpposition) {
    if (generateOpposition) {
      // Allow mocking out randomness.
      this.generateOpposition = generateOpposition;
    }
    this.status = 'waiting_for_move';
    this.type = 'rps';
    this.moves = [];
  }

  getStatus() {
    return this.status;
  }

  generateOpposition() {
    return POSSIBLE_MOVES[Math.floor(Math.random() * POSSIBLE_MOVES.length)];
  }

  getMoves() {
    return this.moves;
  }

  guess(guess) {
    const opposition = this.generateOpposition();

    if (guess === opposition) {
      this.moves.push({result: TIE, guess: guess, opposition: opposition});
    } else if (guess === ROCK && opposition === SCISSORS) {
      this.status = 'finished';
      this.moves.push({result: WIN, guess: guess, opposition: opposition});
    } else if (guess === PAPER && opposition === ROCK) {
      this.status = 'finished';
      this.moves.push({result: WIN, guess: guess, opposition: opposition});
    } else if (guess === SCISSORS && opposition === PAPER) {
      this.status = 'finished';
      this.moves.push({result: WIN, guess: guess, opposition: opposition});
    } else {
      this.moves.push({result: LOSS, guess: guess, opposition: opposition});
    }
  }
}

export default RPS;
