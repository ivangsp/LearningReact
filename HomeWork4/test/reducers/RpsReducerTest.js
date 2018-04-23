import {
    setRPSGameId, startRPSGame, setRPSGameStatus
} from '../../src/actions/index';

import reducer from '../../src/reducers/RpsReducer';

describe('RpsReducer', () => {
    it('is empty initially', () => {
        const initialState = reducer(undefined, startRPSGame());
        expect(reducer(undefined, {})).to.eql(initialState);
    });

    it('sets gameId when a new RPS game begins', () => {
        const initialState = reducer(undefined, startRPSGame());
        expect(reducer(undefined, setRPSGameId(1))).to.eql({...initialState, gameId: 1});
    });

    it('sets game status  when a new RPS game begins', () => {
        const initialState = reducer(undefined, startRPSGame());
        const currentstate = reducer(undefined, setRPSGameId(1));
        expect(reducer(currentstate, setRPSGameStatus('waiting to move'))).to.
        eql({...initialState, status: 'waiting to move', gameId: 1});
    });
});
