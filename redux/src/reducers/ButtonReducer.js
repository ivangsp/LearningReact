import {NEW_GAME_STARTED} from '../actions/index';

const initialState = {
    activeButton: '',
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
      case NEW_GAME_STARTED: {
        return {...state, activeButton: action.payload};
      }
      default:
        return state;
    }
  };

export default AppReducer;
