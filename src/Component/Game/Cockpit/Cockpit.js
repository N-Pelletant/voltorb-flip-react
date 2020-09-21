import React from 'react';

function Cockpit(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>Difficulty level : {props.level}</p>
      <p>Current score : {props.currentScore}</p>
      <p>Total score : {props.totalScore}</p>
    </div>
  );
}

export default Cockpit;