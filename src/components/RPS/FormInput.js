import React, {Component} from 'react';
import PropTypes from 'prop-types';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputvalue: ''
        };
    }
    handleEnter(e) {
        let keycode = (e.keyCode ? e.keyCode : e.which);
            if (keycode == '13') {
              this.props.onsubmit(e.target.value);
              this.setState({inputvalue: ''});
            }
    }

    handleChange(e) {
        this.setState({inputvalue: e.target.value});
    }

    render() {
        const win = this.props.win;
        const form = !win ? (
            <div className='form'>
               <p>Enter your Guess </p>
               <input type='text' onKeyPress={(e) => this.handleEnter(e)} value = {this.state.inputvalue}
               onChange={(e) =>this.handleChange(e)} maxLength='1'/>
           </div>
        ) : null;

        return (
           <div>
             {form}
           </div>
        );
    }
}
FormInput.propTypes ={
    onsubmit: PropTypes.func.isRequired,
    win: PropTypes.bool
};

export default FormInput;

