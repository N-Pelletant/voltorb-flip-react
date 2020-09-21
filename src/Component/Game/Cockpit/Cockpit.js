import React from 'react';
import Card from '../Gameboard/Card/Card';
import classes from './Cockpit.module.css';

function Cockpit({name, level, currentScore, totalScore}) {
  return (
    <div className={classes.Cockpit}>
      <div className={classes.Banner}>
        <h2>Voltorb flip lv{level}</h2>
      </div>
      <Card value={0} />
      <Card value={1} />
      <Card value={2} />
      <Card value={3} />
      <Card value={0} faceUp />
      <Card value={1} faceUp />
      <Card value={2} faceUp />
      <Card value={3} faceUp />
      <p>{name}</p>
      <p>Current score : {currentScore}</p>
      <p>Total score : {totalScore}</p>
    </div>
  );
}

export default Cockpit;