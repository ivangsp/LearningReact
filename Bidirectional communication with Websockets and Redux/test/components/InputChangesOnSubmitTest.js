import React from 'react';
import {shallow} from 'enzyme';

import InputChangesOnSubmit from '../../src/components/InputChangesOnSubmit';

describe('InputChangesOnSubmit', () => {
  it('calls onSubmit and clears input when enter hit', () => {
    const onSubmit = sinon.stub();
    const result = shallow(<InputChangesOnSubmit onSubmit={onSubmit} type='text' maxLength={5} />);
    const input = result.find('input');
    input.simulate('change', {target: {value: 'foo'}});
    input.simulate('keyup', {keyCode: 13});
    expect(onSubmit).to.have.been.calledWith('foo');
    expect(result.state()).to.eql({value: ''});
  });

  it('calls onSubmit when submitImmediately and change triggered', () => {
    const onSubmit = sinon.stub();
    const result = shallow(
      <InputChangesOnSubmit onSubmit={onSubmit} type='text' maxLength={1} submitImmediately={true} />
    );
    const input = result.find('input');
    input.simulate('change', {target: {value: 'a'}});
    input.simulate('keyup', {keyCode: 65});
    expect(onSubmit).to.have.been.calledWith('a');
    expect(result.state()).to.eql({value: ''});
  });
});
