import { combineReducers } from 'redux';
import color from './color';
import number from './number';

const reducer = combineReducers({
  numberData: number,
  colorData: color,
});

export default reducer;
