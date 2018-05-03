import {BUTTON_CHANGED} from '../actions/index';
const initialState = {
    activeButton: '',
};

const AppReducer = (state = initialState, action) => {
    switch (action.type) {
      case BUTTON_CHANGED: {
        return {activeButton: action.payload};
      }
      default:
        return state;
    }
  };

export default AppReducer;
