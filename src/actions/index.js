import * as types from './ActionTypes';

export const inc = () => ({
  type: types.INC,
});

export const dec = () => ({
  type: types.DEC,
});

export const setColor = color => ({
  type: types.SET_COLOR,
  color,
});
