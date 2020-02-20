/* eslint-disable react/prop-types */
import React from 'react';
import withCounter from './withCounter';

// import { Container } from './styles';

function ClickCounter({ count, handleIncrement, name }) {
  return (
    <button onClick={handleIncrement}>
      {name} clicado {count} vezes
    </button>
  );
}

export default withCounter(ClickCounter, 3);
