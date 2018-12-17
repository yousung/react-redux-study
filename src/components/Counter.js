import React from 'react';
import './Counter.scss';
import PropTypes from 'prop-types';

const Counter = ({
  number, color, onInc, onDec, onSetColor,
}) => (
  <div
    className="counter"
    onClick={onInc}
    onContextMenu={(e) => {
      e.preventDefault();
      onDec();
    }}
    onDoubleClick={onSetColor}
    style={{ backgroundColor: color }}
  >
    {number}
  </div>
);

Counter.propTypes = {
  number: PropTypes.number,
  onInc: PropTypes.func,
  onDec: PropTypes.func,
  onSetColor: PropTypes.func,
  color: PropTypes.string,
};

Counter.defaultProps = {
  number: 1,
  color: 'black',
  onInc: () => console.warn('증가 메서드 없음'),
  onDec: () => console.warn('감소 메서드 없음'),
  onSetColor: () => console.warn('색변경 메서드 없음'),
};

export default Counter;
