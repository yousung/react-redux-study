import { connect } from 'react-redux';
import randomColor from 'random-color';
import Counter from '../components/Counter';
import * as actions from '../actions';

export function getRandomColor() {
  const color = randomColor();
  return color.hexString();
}

const mapStateToProps = state => ({
  color: state.colorData.color,
  number: state.numberData.number,
});

const mapDispatchToProps = dispatch => ({
  onInc: () => dispatch(actions.inc()),
  onDec: () => dispatch(actions.dec()),
  onSetColor: () => {
    const color = getRandomColor();
    dispatch(actions.setColor(color));
  },
});

const CounterContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);

export default CounterContainer;
