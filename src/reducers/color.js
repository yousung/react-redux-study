import * as types from '../actions/ActionTypes';

const init = {
  color: 'black',
};

const color = (state = init, action) => {
  switch (action.type) {
    case types.SET_COLOR:
      return {
        color: action.color,
      };
    default:
      return state;
  }
};

export default color;
