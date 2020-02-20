/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
  render() {
    const { count, incrementCount, name } = this.props;

    return (
      <button onClick={incrementCount}>
        {name} clicked {count} times
      </button>
    );
  }
}

export default withCounter(ClickCounter, 5);
