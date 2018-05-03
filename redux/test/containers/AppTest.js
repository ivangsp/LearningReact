import React from 'react';
import {shallow} from 'enzyme';

import App from '../../src/containers/App';
import CreateGameButtons from '../../src/containers/buttonContainer';

describe('App', () => {
  it('initially renders App with no games', () => {
    const app = shallow(<App />);
    expect(app.find('games')).to.be.empty;
    expect(app).not.to.be.empty;
  });

  it('renders RPS game games if RPS game created', () => {
    const app = shallow(<App />);
    const createGameComponent = app.find(CreateGameButtons);
    createGameComponent.simulate('onClick', 'RPS');

    app.update();
    // expect(app).to.have.exactly(1).descendants(RPSGame);
  });

  it('renders Hangman game games if Hangman game created', () => {
    const app = shallow(<App />);
    const createGameComponent = app.find(CreateGameButtons);
      createGameComponent.simulate('onClick', 'HANGMAN');

    app.update();
    // expect(app).to.have.exactly(1).descendants(HangmanGame);
  });
});
