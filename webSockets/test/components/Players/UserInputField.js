import React from 'react';
import {shallow} from 'enzyme';

import UserInputField from '../../../src/components/Players/UserInputField';

describe('UserInputField', () => {
    it('calls onSubmit and clears input when hint enter ', () => {
        const onSubmit = sinon.stub();
        const result = shallow(<UserInputField connect={onSubmit} />);
        const input = result.find('input');

        const button = result.find('button');
        input.simulate('change', {target: {value: 'ivan'}});
        button.simulate('click');
        expect(onSubmit).to.have.been.calledWith('ivan');
        expect(result.state()).to.eql({username: ''});
    });
});
