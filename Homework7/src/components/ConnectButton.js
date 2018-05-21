import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ConnectButton extends Component {
  constructor() {
    super();
    this.state = {
      name: undefined
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onConnect = this.onConnect.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }
  onNameChange(event) {
    this.setState({name: event.target.value});
  }
  onConnect() {
    this.props.connect({playerName: this.state.name});
  }
  onKeyUp(event) {
    if (event.keyCode === 13) {
      this.onConnect();
    }
  }
  render() {
    return (
      <div className='connect'>
        <input onChange={this.onNameChange} onKeyUp={this.onKeyUp} placeholder='Enter name'></input>
        <button onClick={this.onConnect}>Connect!</button>
      </div>
    );
  }
}

ConnectButton.propTypes = {
  connect: PropTypes.func.isRequired
};

export default ConnectButton;
