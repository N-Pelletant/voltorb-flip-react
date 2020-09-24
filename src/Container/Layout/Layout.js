import React, { useState } from 'react';
import Leaderboard from '../../Component/Leaderboard/Leaderboard';
import Game from '../../Component/Game/Game';
import RuleCard from '../../Component/RuleCard/RuleCard';
import classes from './Layout.module.css';

function Layout() {
  const [updateLeaderboard, setLeaderboard] = useState(true);

  const updateLeaderboardHandler = () => {
    setLeaderboard(!updateLeaderboard)
  }

  return (
    <div className={classes.Layout}>
      <Leaderboard update={updateLeaderboard} />
      <Game updateLeaderboard={updateLeaderboardHandler} />
      <RuleCard /> 
    </div>
  );
}

export default Layout;
