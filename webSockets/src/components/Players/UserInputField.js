import React, {Component} from 'react';
import PropTypes from 'prop-types';

class UserInputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        };
    }

    onChange(e) {
        this.setState({
            username: e.target.value
        });
    }

    submit() {
        this.props.connect(this.state.username);
        this.setState({
            username: ''
        });
    }


    render() {
        return (
            <div>
                <input type='text' onChange={(e) => this.onChange(e)} value={this.state.username}/>
                <button onClick={() => this.submit()}> Connect</button>
            </div>
        );
    }
}

UserInputField.propTypes = {
    connect: PropTypes.func.isRequired
};
export default UserInputField;
