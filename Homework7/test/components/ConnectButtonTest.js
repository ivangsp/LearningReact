import React from 'react';
import {shallow} from 'enzyme';

import ConnectButton from '../../src/components/ConnectButton';

describe('ConnectButton', () => {
  it('calls connect callback with name when button clicked', () => {
    const connect = sinon.stub();
    const result = shallow(<ConnectButton connect={connect}/>);
    result.find('input').simulate('change', {target: {value: 'name'}});
    result.find('button').simulate('click');

    expect(connect).to.have.been.calledWith({playerName: 'name'});
  });
});
