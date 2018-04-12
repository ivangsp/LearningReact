// /* global assert */

import Hangman from '../../src/games/hangmanLogic';
const WORDS = ['oyster'];

describe('App', function() {
    let game;

    beforeEach(() => {
        game = new Hangman();
    });

    it('displays the char when the user guesses it right', () => {
        WORDS.forEach((guess) => {
            let predChar = [];
            for (let i = 0; i < guess.length; i++) {
                game.predictedChar[i] = '-';
                predChar[i] = '-';
            }
            game.word = guess;
            predChar[0] = guess[0];
            let userGuess = guess[0];
            expect(game.guess(userGuess)).to.eql({
            predChar: predChar, status: 'playing', numIncorrectGuess: 0
            });
        });
      });

      it('character stays unchaged when users fails to guess', () => {
        WORDS.forEach((guess) => {
            let predChar = [];
            for (let i = 0; i < guess.length; i++) {
                game.predictedChar[i] = '-';
                predChar[i] = '-';
            }
            game.word = guess;
            let userGuess = 'z';
            expect(game.guess(userGuess)).to.eql({
            predChar: predChar, status: 'playing', numIncorrectGuess: 1
            });
        });
      });

      it('number of incorrect guess increases whenever the user continously guesses wrongly', () => {
        WORDS.forEach((guess) => {
            let predChar = [];
            for (let i = 0; i < guess.length; i++) {
                game.predictedChar[i] = '-';
                predChar[i] = '-';
            }
            game.word = guess;
            let userGuess = 'z';
            // user guesses wrongly the first time
            game.guess(userGuess); // numincorrext guess = 1
            game.guess(userGuess); // numincorrext guess = 2
            expect(game.guess(userGuess)).to.eql({
            predChar: predChar, status: 'playing', numIncorrectGuess: 3
            });
        });
      });

      it('game state changes to finished after 6 times of wrong guess', () => {
        WORDS.forEach((guess) => {
            let predChar = [];
            for (let i = 0; i < guess.length; i++) {
                game.predictedChar[i] = '-';
                predChar[i] = '-';
            }
            game.word = guess;
            let userGuess = 'z';
            // user guesses wrongly the first time
            game.guess(userGuess); // numincorrext guess = 1
            game.guess(userGuess); // numincorrext guess = 2
            game.guess(userGuess); // numincorrext guess = 3
            game.guess(userGuess); // numincorrext guess = 4
            game.guess(userGuess); // numincorrext guess = 5
            expect(game.guess(userGuess)).to.eql({
            predChar: predChar, status: 'finished', numIncorrectGuess: 6
            });
        });
      });
});
