// @ts-nocheck
/* eslint-disable spaced-comment */
import React from 'react';
import ClickCounter from './hocFunction/ClickCounter';
import HoverCounter from './hocFunction/HoverCounter';

function App() {
  //Usos de HOC connectHOC (Redux), withRouter(Reac Router Dom), withStyles (Material UI)
  return (
    <div>
      <ClickCounter name="Agnaldo" />
      <HoverCounter />
    </div>
  );
}

export default App;
