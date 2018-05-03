import React from 'react';
import {shallow} from 'enzyme';
import App from '../../src/containers/App';

describe('App', () => {
  it('renders successfully', () => {
    const app = shallow(<App />);
    expect(app).not.to.be.empty;
  });
});
