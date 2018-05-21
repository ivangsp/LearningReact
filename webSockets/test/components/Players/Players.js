import React from 'react';
import {shallow} from 'enzyme';

import Players from '../../../src/components/Players/Players';
import UserInputField from '../../../src/components/Players/UserInputField';

describe('Players', () => {
    it('renders UserInputField before connecting', () => {
        const result = shallow(
            <Players connected={false} players={[]} connect={sinon.stub()}
                     userId={''} connecting={false} disconnect={sinon.stub()} error={''}/>
        );

        expect(result).to.have.descendants(UserInputField);
    });

    it('does not render UserInputField when connected', () => {
        const result = shallow(
            <Players connected={true} players={[]} disconnect={sinon.stub()}
                     connect={sinon.stub()} userId={'hk'} connecting={false} error={''}/>
        );

        expect(result).not.to.have.descendants(UserInputField);
    });
});

