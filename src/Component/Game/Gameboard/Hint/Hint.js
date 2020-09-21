import React from 'react';
import classes from './Hint.module.css';

function Hint(props) {
  const bgColor = {
    backgroundColor: `var(--card-int-${props.cssVar})`,
  }

  return (
    <div className={classes.Hint}>
      <p style={bgColor}>
        {props.sum}
      </p>
      <p style={bgColor}>
        {props.bombs}
      </p>
    </div>
  );
}

export default Hint;