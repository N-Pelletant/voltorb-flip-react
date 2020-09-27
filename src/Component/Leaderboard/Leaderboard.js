import React, { useState, useEffect } from 'react';
import Interface from '../../WebInterface';
import Spinner from './../UI/Spinner/Spinner';
import classes from './Leaderboard.module.css';

function Leaderboard({ update }) {
  const [leaders, setLeaders] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      Interface
        .get('/leaderboard.json')
        .then(res => {
          const bestPlayers = Object.values(res.data)
            .map(elem => Object.entries(elem)[0])
            .sort((p1, p2) => p2[1] - p1[1])
            .splice(0, 5)
            .map((player, index) => {
              return {
                name: player[0],
                score: parseInt(player[1]),
                key: "leader" + index
              }
            });

          setLeaders(bestPlayers);
        })
    } catch (e) {
      setError(e);
    }
  }, [update]);


  let rows = <Spinner />;

  if (error)
    rows = <p>{error.message}</p>

  if (leaders)
    rows = leaders.map((leader, index) => (
      <div key={leader.key}>
        <p><span>{index + 1}</span> {leader.name}</p>
        <p>{leader.score}</p>
      </div>
    ));

  return (
    <div className={classes.Leaderboard}>
      <h1>Leaderboard</h1>
      {rows}
    </div>
  )
}

export default Leaderboard;