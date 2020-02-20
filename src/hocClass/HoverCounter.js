/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React, { Component } from 'react';
import witCounter from './withCounter';

class HoverCounter extends Component {
  render() {
    const { count, incrementCount, name } = this.props;
    return (
      <h2 onMouseOver={incrementCount}>
        {name} hovered {count} times
      </h2>
    );
  }
}

export default witCounter(HoverCounter, 10);
