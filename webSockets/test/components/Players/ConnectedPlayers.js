import React from 'react';
import {shallow} from 'enzyme';
import ConnectedPlayers from '../../../src/components/Players/ConnectedPlayers';

describe('ConnectedPlayers', () => {
    it('does not p when there is no players connected', () => {
        const wraper = shallow(<ConnectedPlayers players = {[]} userId={''} />);
        expect(wraper.find('p')).to.have.length(0);
    });

    it('should render users when players are connected', () => {
        const wraper = shallow(<ConnectedPlayers players={[{id: '1hk', name: 'james'}]} userId={''}/>);
        expect(wraper.find('p').html()).to.eql('<p>james</p>');
    });

    it('should render default user appended with you when players userId is not null', ()=> {
        const wraper = shallow(<ConnectedPlayers players={[{id: '1', name: 'james'}]} userId={'1'}/>);
        expect(wraper.find('p').html()).to.eql('<p> james (you)</p>');
    });
});
