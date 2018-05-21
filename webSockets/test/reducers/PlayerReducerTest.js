import reducer from '../../src/reducers';
import * as type from '../../src/actions/types';

describe('reducer', () => {
    const initialState = {
        gameReducer: {
            createGameRequestInFlight: false,
            games: {}
        },
        playerReducer: {
            connecting: false,
            players: [],
            user_id: '',
            connected: false,
            error: ''
        }
    };

    it('initially returns empty object', () => {
        expect(reducer(undefined, {})).to.eql(initialState);
    });

    it('sets connecting true  when connecting a new player', () => {
        expect(reducer(undefined, {type: type.CONNECTING})).to.eql({
            ...initialState, playerReducer: {
                connecting: true, error: '', players: [], user_id: '', connected: false}
        });
    });

    it('sets connecting false and user_Id  when connecting a new player', () => {
        const action = {
            type: type.ADD_USER_ID,
            payload: '1'
        };

        expect(reducer(undefined, action)).to.eql({
            ...initialState, playerReducer: {
                connecting: false, error: '', players: [], user_id: '1', connected: true}
        });
    });

    it('sets list of players when connecting a new player', () => {
        const action = {
            type: type.ADD_USERS,
            payload: [{id: '1', name: 'ivan'}]
        };

        expect(reducer(undefined, action)).to.eql({
            ...initialState, playerReducer: {
                connecting: false, error: '', players: [{id: '1', name: 'ivan'}],
                user_id: '', connected: false}
        });
    });
});
