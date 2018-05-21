import React from 'react';
import {shallow} from 'enzyme';
import {AppComponent as App} from '../../src/containers/App';
import GameButtons from '../../src/containers/GameButtonsContainer';
import {createMemoryHistory} from 'history';

describe('AppComponent', () => {
  const history = createMemoryHistory('/');

  it('renders successfully', () => {
    const app = shallow(<App connected={true} history={history} />);
    expect(app).not.to.be.empty;
  });

  it('does not render GameButtons when not connected', () => {
    const app = shallow(<App connected={false} history={history}/>);
    expect(app).not.to.have.descendants(GameButtons);
  });
});
