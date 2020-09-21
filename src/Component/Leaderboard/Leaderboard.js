import React, { Component } from 'react';
import Interface from '../../WebInterface';
import Spinner from './../UI/Spinner/Spinner';
import classes from './Leaderboard.module.css';

class Leaderboard extends Component {
  state = {
    leaders: null,
    error: false
  }

  componentDidMount = async () => {
    try {
      const lb = await Interface.get('/leaderboard.json');

      const bestPlayers = Object.entries(lb.data)
        .sort((p1, p2) => p2[1] - p1[1])
        .splice(0, 5)
        .map((player, index) => {
          return {
            name: player[0],
            score: parseInt(player[1]),
            key: "bestPlayer" + index
          }
        });

      this.setState({
        leaders: bestPlayers
      })
    } catch (e) {
      this.setState({error: e})
    }
  }

  render() {
    let rows = <Spinner />;

    if (this.state.error) {
      rows = <p>{this.state.error.message}</p>
    }

    if (this.state.leaders) {
      rows = this.state.leaders.map((leader, index) => (
        <div key={leader.key}>
          <p><span>{index + 1}</span> {leader.name}</p>
          <p>{leader.score}</p>
        </div>
      ));
    }

    return <div className={classes.Leaderboard}>
      <h1>Leaderboard</h1>
      {rows}
    </div>;
  }
}

export default Leaderboard;