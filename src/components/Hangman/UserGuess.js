import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserGuess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            guess: '',
            disabled: false
        };
    }

    handleChange(e) {
        this.setState({guess: e.target.value});
       console.log('onchange called');
    }

    submitGuess(e) {
        console.log('onPress called');
        this.props.submitGuess(e.target.value);
        this.setState({guess: ''});
    }

    render() {
       return (
            <p>Guess a letter from the word
                <input type= 'text'
                maxLength='1' onChange= {(e) => this.handleChange(e)}
                onKeyUp = {(val) => this.submitGuess(val)}
                value = {this.state.guess}
                disabled = {(this.props.gameState === 'finished') ? 'disabled' : ''} />
            </p>
       );
    }
}

UserGuess.propTypes = {
    submitGuess: PropTypes.func.isRequired,
    gameState: PropTypes.string
};

export default UserGuess;
