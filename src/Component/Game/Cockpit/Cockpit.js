import React from 'react';
import Card from '../Gameboard/Card/Card';
import classes from './Cockpit.module.css';

function Cockpit({ name, level, currentScore, totalScore }) {
  function padNumber(number) {
    if( number > 99999) return "99999";

    let s = String(number);
    while (s.length < 5) {s = "0" + s;}
    return s;
  }

  return (
    <div className={classes.Cockpit}>
      <div className={classes.Banner}>
        <h2>Voltorb flip lv{level}</h2>
        <p>Flip the cards and collect points</p>
      </div>

      <div className={classes.Number}>
        <div>
          <Card value={1} faceUp className={classes.Card1} />
          <Card value={2} faceUp className={classes.Card2} />
          <Card value={3} faceUp className={classes.Card3} />
        </div>
        <p className={classes.Explanation}>...x1!...x2!...x3!</p>
      </div>

      <div className={classes.Bomb}>
        <Card value={0} faceUp />
        <p className={classes.Explanation}>x0! You lose</p>
      </div>

      <div className={classes.Score}>
        <p>{name}'s current score :</p>
        <span>{padNumber(currentScore)}</span>
      </div>
      <div className={classes.Score}>
        <p>{name}'s total score :</p>
        <span>{padNumber(totalScore)}</span>
      </div>
    </div>
  );
}

export default Cockpit;