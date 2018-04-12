class Lobby {
    constructor() {
        this.gameState = 'playing';
    }

    generateRandomGuess() {
        let possible = 'PRS';
        let text = possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }

    guess(userPrediction) {
        let result = '';
        const randomGuess = this.generateRandomGuess();
        switch (userPrediction.toUpperCase()) {
            case 'S':
                switch (randomGuess) {
                    case 'P':
                        this.gameState = 'win';
                        result = 'You guessed S and you won against P';
                        break;
                    case 'S':
                        this.gameState = 'tie';
                        result = 'You guessed S and you tied against S';
                        break;

                    default:
                        this.gameState = 'lost';
                        result = 'You guessed Scissors and you lost against Rock';
                }
                break;
            case 'P':
                switch (randomGuess) {
                    case 'R':
                        this.gameState = 'win';
                        result = 'You guessed P and you won against R';
                        break;
                    case 'P':
                        this.gameState = 'tie';
                        result = 'You guessed Papper and you tied against Papper';
                        break;

                    default:
                        this.gameState = 'lost';
                        result = 'You guessed Papper and you lost against Scissors';
                }
            break;
            case 'R':
                switch (randomGuess) {
                    case 'S':
                        this.gameState = 'win';
                        result = 'You guessed Rock and you won against Scissors';
                        break;
                    case 'R':
                        this.gameState = 'tie';
                        result = 'You guessed Rock and you tied against Rock';
                        break;

                    default:
                        this.gameState = 'lost';
                        result = 'You guessed Rock and you lost against Papper';
                }
                break;

            default:
                throw new Error('invalid argument passed');
        }

        return {gameState: this.gameState, result: result};
    }
}

export default Lobby;
