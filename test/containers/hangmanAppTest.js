// import React from 'react';
// import {shallow} from 'enzyme';

// import App from '../../src/containers/hangmanApp';
// import Result from '../../src/components/hangman/Result';
// import UserForm from '../../src/components/hangman/UserGuess';

// describe('App', () => {
//   it('initially renders empty CommentList', () => {
//     expect(
//       shallow(<App />)
//     ).to.contain(
//       <Result predChar={[]} game= {{}} />
//     );
//   });


//   it('renders Form', () => {
//     expect(
//       shallow(<App />)
//     ).to.contain.descendants(
//         UserForm
//     );
//   });

//   it('adds new comment to CommentList when submitted from CommentForm', () => {
//     const app = shallow(<App gameState='playing' />);

//     app.find(UserForm).props().onKeyUp({author: 'author', text: 'text'});
//     app.update();

//     expect(app).to.contain(
//       <CommentList comments={[
//         {id: 1, author: 'author', text: 'text'}
//       ]} />
//     );
//   });
// });
