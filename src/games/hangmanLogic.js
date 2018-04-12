const WORDS = ['barracuda', 'pufferfish', 'oyster', 'stringray'];

class Hangman {
    constructor() {
        this.word = ''; // holds the randomly selected word
        this.status = 'playing';
        this.predictedChar = [];
        this.predictedIndex = [];
        this.count = 0; // number of times the game user has attempted
        this.numIncorrectGuess = 0; // number of times user has wrongly guessed
    }

    generateOpposition() {
        this.word= WORDS[Math.floor(Math.random() * WORDS.length)];
        for (let i =0; i < this.word.length; i++) {
            this.predictedChar[i] = '-';
        }
        return {predChar: this.predictedChar};
    }

    guess(userGuess) {
        console.log('remaining char', this.remainingChar);
        let charIndex = this.getCharIndex(this.word, userGuess, 0);
        if (charIndex > -1) {
            this.predictedChar[charIndex] = this.word[charIndex];
        } else {
            this.numIncorrectGuess = this.numIncorrectGuess + 1;
        }
        this.count = this.count + 1;
        if (this.count === this.word.length || this.numIncorrectGuess === 6) {
            this.status = 'finished';
        }

        return {predChar: this.predictedChar, status: this.status, numIncorrectGuess: this.numIncorrectGuess};
    }

    getCharIndex(word, ch, count) {
        let newword = word;
        let index = newword.indexOf(ch);
        let charIndex = index + count;
        if (index > -1) {
            // check if index exists in predictedchar index
            // debugger;
            let newIndex = this.predictedIndex.indexOf(charIndex);
            if (newIndex > -1) {
                let c = count + 1;
                let word = newword.substr(0, index) + newword.substr(index +1, newword.length);
                return (this.getCharIndex(word, ch, c));
            }
            this.predictedIndex[charIndex] = charIndex;
            return charIndex;
        }
        return index;
    }
}


export default Hangman;
