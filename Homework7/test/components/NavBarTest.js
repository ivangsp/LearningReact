import React from 'react';
import {shallow} from 'enzyme';
import NavBar from '../../src/components/NavBar';
import {Link} from 'react-router-dom';


describe('NavBar', () => {
  it('does not show any links when no user is connected', () => {
  const wrapper = shallow(<NavBar connected={false} />);
    expect(wrapper).not.to.have.descendants(Link);
  });
  it('renders all the Links when the user is connected', () => {
    const wrapper = shallow(<NavBar connected={true} />);
    expect(wrapper).to.have.exactly(4).descendants(Link);
  });
});
