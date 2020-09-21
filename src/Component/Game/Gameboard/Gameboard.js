import React from 'react';
import Hint from './Hint/Hint';

function Gameboard(props) {
  return (
    <div>
      <Hint sum={11} bomb={1} cssVar={1} /> 
      <Hint sum={1} bomb={4} cssVar={2} /> 
      <Hint sum={3} bomb={3} cssVar={3} /> 
      <Hint sum={4} bomb={2} cssVar={4} /> 
      <Hint sum={9} bomb={2} cssVar={5} /> 
    </div>
  );
}

export default Gameboard;