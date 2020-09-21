import React from 'react';

import classes from './RuleCard.module.css';

function RuleCard(props) {
  return (
    <div className={classes.RuleCard}>
      <h1>Rules</h1>
      <p>To win, you must get the highest score possible. The first card you return will become your current score, then any further card will multiply it. Return a bomb and you lose.</p>
      <p>You can flag a card you think is a bomb by right-clicking it.</p>
      <h3>Hints</h3>
      <p>On each row and column, there is a hint. It will display the sum of all numbered cards of the row or column, and the number of bombs in it. Use it wisely.</p>
    </div>
  );
}

export default RuleCard;