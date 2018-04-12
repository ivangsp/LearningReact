import React, {Component} from 'react';
import ResultList from './../components/RPS/ResultList';
import FormInput from './../components/RPS/FormInput';
import Game from './../games/RPSLogic';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            win: false,
            result: []
        };
    }

    handleForm(guess) {
        let game = new Game();
        const result = game.guess(guess);
        if (result.gameState ==='win') {
            this.setState({win: true});
        }

        this.setState({
            result: this.state.result.concat(result)
        });
    }

    startNewGame() {
        this.setState({
            win: false,
            result: []
        });
    }

    render() {
        return (
            <div className= 'container'>
                <h2>Game Lobby</h2>
                <h4>Rock Paper Scissors</h4>
                <p>Guess either Rock(R), Paper(P), Scissors(S)</p>
                <FormInput onsubmit = {(value) => this.handleForm(value)} win={this.state.win} />
                <ResultList results={this.state.result} win = {this.state.win}
                startNewGame = {() => this.startNewGame() } />
            </div>
        );
    }
}

export default App;
