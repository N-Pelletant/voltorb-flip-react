import React from 'react';
import classes from './Card.module.css';

import card0 from './../../../../assets/images/cards/0.png';
import card1 from './../../../../assets/images/cards/1.png';
import card2 from './../../../../assets/images/cards/2.png';
import card3 from './../../../../assets/images/cards/3.png';

function Card({ value, faceUp }) {
  let pic = {};

  switch (value) {
    case 0:
      pic.src = card0;
      pic.alt = "bomb"
      break;
    case 1:
      pic.src = card1;
      pic.alt = "1"
      break;
    case 2:
      pic.src = card2;
      pic.alt = "2"
      break;
    case 3:
      pic.src = card3;
      pic.alt = "3"
      break;
    default:
      pic = null;
  }

  const addedClasses = [classes.Card]
  if(faceUp) addedClasses.push(classes.flip)

  return (
    <div
      className={addedClasses.join(' ')}
      onClick={() => console.log("Clicked")}>
      <div className={classes.Back}></div>
      <img className={classes.Front} src={pic.src} alt={pic.alt} />
    </div>);
}

export default Card;