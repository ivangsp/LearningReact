import {RPS_GAME_CREATED, RPS_GAME_MOVED} from '../actions/index';


const initialState = {
    moves: [],
    status: '',
    id: '',
    won: false,
};

const RpsReducer = (state = initialState, action) => {
    switch (action.type) {
        case RPS_GAME_CREATED: {
            return {...state,
                moves: [],
                status: action.payload.status,
                id: action.payload.id,
                won: action.payload.won
            };
        }
        case RPS_GAME_MOVED: {
            const newMoves = state.moves.concat(action.payload.move);
            return {...state,
                status: action.payload.status,
                won: action.payload.won,
                moves: newMoves
            };
        }

        default:
            return state;
    }
};
export default RpsReducer;
