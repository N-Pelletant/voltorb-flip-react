import React from 'react';
import classes from './Hint.module.css';
import bomb from './../../../../assets/images/bomb_bgless.png';

function Hint(props) {
  const bgColor = {
    backgroundColor: `var(--card-int-${props.cssVar})`,
  }

  return (
    <div className={classes.Hint}>
      <p style={bgColor}>
        {props.sum}
      </p>
      <div style={bgColor}>
        <img src={bomb} alt=""/><p>{props.bomb}</p>
      </div>
    </div>
  );
}

export default Hint;