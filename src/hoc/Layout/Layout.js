import React from 'react';
import Leaderboard from '../../Component/Leaderboard/Leaderboard';
import Game from '../../Component/Game/Game';
import RuleCard from '../../Component/RuleCard/RuleCard';
import classes from './Layout.module.css';

function Layout() {
  return (
    <div className={classes.Layout}>
      <Leaderboard />
      <Game />
      <RuleCard /> 
    </div>
  );
}

export default Layout;
