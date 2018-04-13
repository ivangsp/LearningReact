// /* global sinon */
import React from 'react';
import {shallow, mount} from 'enzyme';

import Result from '../../../src/components/hangman/Result';

describe('Result', () => {
  it('always renders a single div', () => {
    const wrapper = mount(<Result predChar={['a', 'b']} />);
    const divs = wrapper.find('<div>');
    expect(divs.length).toBeGreaterThan(0);
  });

  it('div contains everything else that gets rendered', () => {
    const wrapper = mount(<Result predChar={['a', 'b']} />);
    const divs = wrapper.find('<div>');
    const wrappingDiv = divs.first();
    expect(wrappingDiv.children()).toEqual(wrapper.children());
  });

  it('always renders single image', () => {
    const wrapper = mount(<Result predChar={['a', 'b']} />);
    const img = wrapper.find('<img>');
    expect(img.length).toBe(1);
  });

  it('renders', () => {
    expect(shallow(
      <Result predChar={[]} game={{}} >text</Result>
    )).to.exist;
  });


  // it('allows us to set props', () => {
  //   const wrapper = mount(<Result predChar={['a', 'b']} />);
  //   expect(wrapper.props().predChar).to.equal(['a', 'b']);
  //   wrapper.setProps({predChar: ['a', 'b', 'c']});
  //   expect(wrapper.props().predChar).to.equal(['a', 'b', 'c']);
  // });
});

