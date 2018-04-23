export const ROCK = 'ROCK';
export const PAPER = 'PAPER';
export const SCISSORS = 'SCISSORS';

const POSSIBLE_MOVES = [ROCK, PAPER, SCISSORS];

export const TIE = 'TIE';
export const WIN = 'WIN';
export const LOSS = 'LOSS';

class RPS {
  constructor() {
    this.status = 'waiting_for_move';
  }

  getStatus() {
    return this.status;
  }

  generateOpposition() {
    return POSSIBLE_MOVES[Math.floor(Math.random() * POSSIBLE_MOVES.length)];
  }

  guess(guess, generateOpposition) {
    let opposition;
    if (generateOpposition) {
      opposition = generateOpposition();
    } else {
      opposition = this.generateOpposition();
    }

    if (guess === opposition) {
      return {result: TIE, guess: guess, opposition: opposition};
    } else if (guess === ROCK && opposition === SCISSORS) {
      this.status = 'finished';
      return {result: WIN, guess: guess, opposition: opposition};
    } else if (guess === PAPER && opposition === ROCK) {
      this.status = 'finished';
      return {result: WIN, guess: guess, opposition: opposition};
    } else if (guess === SCISSORS && opposition === PAPER) {
      this.status = 'finished';
      return {result: WIN, guess: guess, opposition: opposition};
    } else {
      return {result: LOSS, guess: guess, opposition: opposition};
    }
  }
}

export default RPS;
