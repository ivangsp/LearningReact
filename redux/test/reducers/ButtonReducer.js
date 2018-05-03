// import {
//     newGameStarted
// } from '../../src/actions/index';

import reducer from '../../src/reducers/ButtonReducer';

describe('Button Reducer', () => {
    it('Button is initially set none', () => {
        expect(reducer(undefined, {})).to.eql({activeButton: ''});
    });

    // it('sets button type when the game starts', () => {
    //     expect(reducer(undefined, newGameStarted('RPS'))).to.
    //     eql({activeButton: 'RPS'});
    // });
});
