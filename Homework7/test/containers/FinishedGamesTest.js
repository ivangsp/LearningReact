import React from 'react';
import {shallow} from 'enzyme';
import FinishedGameContainer from '../../src/containers/FinishedGameContainer';
import {Redirect} from 'react-router-dom';
import configureStore from 'redux-mock-store';

const createMockStore = configureStore();
let store;
const initialState = {games: {games: {}}, connection: {connectionState: 'connected'}};
describe('FinishedGameContainer', () => {
    beforeEach(() => {
        store = createMockStore(initialState);
    });
  const games = [{
    id: 1,
    type: 'hangman',
    wrongGuessCount: 0,
    letters: [],
    status: 'waiting_for_move'
  }];

  it('redirects when no user is connected', () => {
    const wrapper = shallow(<FinishedGameContainer connected={true} games={games} store={store}/>).dive();
    expect(wrapper).to.have.exactly(1).descendants(Redirect);
  });
});
