/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import withCounter from './withCounter';

function HoverCounter({ count, handleIncrement }) {
  return <h2 onMouseOver={handleIncrement}>hovered {count} times</h2>;
}

export default withCounter(HoverCounter, 6);
