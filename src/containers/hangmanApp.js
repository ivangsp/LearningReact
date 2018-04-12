import React, {Component} from 'react';
import Hangman from './../games/hangmanLogic';
import UserGuess from './../components/Hangman/UserGuess';
import Result from './../components/Hangman/Result';


class App extends Component {
    constructor(props) {
        super(props);
        this.game = new Hangman();
        let res = this.game.generateOpposition();
        this.state = {
            game: res,
            predChar: res.predChar};
    }

    submitGuess(guess) {
     const res = this.game.guess(guess);
     this.setState({
         game: res,
         predChar: res.predChar
    });

     console.log('guess', res.predChar);
    }

    render() {
        return (
            <div className= 'hangmanContainer'>
                <h2>Hangman Game </h2>
                <UserGuess submitGuess={(guess) => this.submitGuess(guess)} gameState = {this.game.status} />
                <Result game = {this.state.game} predChar = {this.state.predChar}/>
            </div>
        );
    }
}

export default App;
