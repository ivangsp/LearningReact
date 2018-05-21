import React from 'react';
import {shallow} from 'enzyme';

import ConnectionState from '../../src/components/ConnectionState';
import ConnectButton from '../../src/components/ConnectButton';

describe('ConnectionState', () => {
  const render = (props) => {
    const propsWithDefaults = Object.assign({
      connect: sinon.stub(),
      disconnect: sinon.stub()
    }, props);
    return shallow(<ConnectionState {...propsWithDefaults} />);
  };

  it('shows disconnect button when connection_accepted', () => {
    const result = render({connectionState: 'connection_accepted'});
    expect(result).to.have.text('Disconnect!');
  });

  it('shows connect button when disconnected', () => {
    const result = render({connectionState: 'disconnected'});
    expect(result).to.have.descendants(ConnectButton);
  });

  it('shows connecting when connecting', () => {
    const result = render({connectionState: 'connecting'});
    expect(result).to.have.text('Connecting...');
  });

  it('shows connecting when connected', () => {
    const result = render({connectionState: 'connected'});
    expect(result).to.have.text('Connecting...');
  });
});
