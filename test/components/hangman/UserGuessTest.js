/* global sinon */
import React from 'react';
import {shallow} from 'enzyme';

import UserGuess from '../../../src/components/hangman/UserGuess';

describe('UserGuess', () => {
  it('renders', () => {
    expect(shallow(
      <UserGuess gameState='finished' submitGuess={sinon.stub()} >text</UserGuess>
    )).to.exist;
  });

  it('renders contained element', () => {
    expect(shallow(
      <UserGuess gameState='finished' submitGuess={sinon.stub()} >contained</UserGuess>
    )).to.include.text('Guess a letter from the word');
  });

  it('has one p, one inputs', () => {
    const form = shallow(<UserGuess gameState='finished' submitGuess={sinon.stub()} text='text' />);
    expect(form).to.have.exactly(1).descendants('input');
    expect(form.find('input').length).to.eq(1);
  });

//   it('calls submitGuess with user input  when onKeyUp is called', () => {
//         const submitGuess = sinon.spy();
//         const wrapper = mount(<UserGuess gameState='finished' submitGuess={sinon.stub()} text='text'
//          onKeyUp= {submitGuess} />);
//         wrapper.find('input').simulate('click');
//         // expect(wrapper.state('change')).to.eq('');
//         // expect(wrapper.state('keyDown')).to.equal('');
//         expect(submitGuess.called).to.be.true;
//     });
});


// describe('CommentForm', () => {
//   // Testing callbacks and the arguments that callbacks receive is generally
//   // very useful.


//   // Testing any other behaviour that a component has is also useful
//   it('clears state when submit button clicked', () => {
//     const form = shallow(<CommentForm onSubmit={sinon.stub()} text='text' />);

//     form.setState({author: 'author', text: 'text'});
//     form.find('button').simulate('click');
//     expect(form.state()).to.eql({author: '', text: ''});
//   });
// });


