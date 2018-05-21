import * as type from '../actions/types';
const initialState = {
    user_id: '',
    players: [],
    connecting: false,
    connected: false,
    error: '',
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case type.CONNECTING: {
            return {...state, connecting: true};
        }
        case type.ADD_USER_ID: {
            return {...state, user_id: action.payload, connecting: false, connected: true, error: ''};
        }
        case type.ADD_USERS: {
            return Object.assign({}, state, {players: action.payload});
        }
        case type.USERNAME_EXISTS: {
            return {...state, error: action.payload};
        }

        case type.DISCONECTED: {
            return initialState;
        }
        default:
            return state;
    }
};
export default reducer;
