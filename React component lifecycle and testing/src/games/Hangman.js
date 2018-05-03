const TARGET_WORDS = ['barracuda', 'pufferfish', 'oyster', 'stingray'];
const LOSS_WRONG_GUESS_COUNT = 6;

class Hangman {
  static generate() {
    return new Hangman(TARGET_WORDS[Math.floor(Math.random() * TARGET_WORDS.length)]);
  }

  constructor(targetWord) {
    this.status = 'waiting_for_move';
    this.wrongGuessCount = 0;
    this.targetWord = targetWord;
    this.letterStatuses = targetWord.split('').map(
      (c) => ({guessedLetter: undefined, target: c})
    );
  }

  getStatus() {
    return this.status;
  }

  getWrongGuessCount() {
    return this.wrongGuessCount;
  }

  getGuessedLetters() {
    return this.letterStatuses.map((s) => (s.guessedLetter));
  }

  guess(letter) {
    if (this.targetWord.indexOf(letter) === -1) {
      this.wrongGuessCount = this.wrongGuessCount + 1;
      if (this.getWrongGuessCount() === LOSS_WRONG_GUESS_COUNT) {
        this.status = 'lost';
      }
    } else {
      this.letterStatuses = this.letterStatuses.map((status) => {
        if (status.target === letter) {
          return Object.assign({}, status, {guessedLetter: letter});
        } else {
          return status;
        }
      });
      if (this.letterStatuses.every((s) => s.guessedLetter !== undefined)) {
        this.status = 'won';
      }
    }
  }
}

export default Hangman;
