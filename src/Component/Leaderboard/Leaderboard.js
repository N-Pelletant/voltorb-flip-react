import React, { Component } from 'react';
import classes from './Leaderboard.module.css';

class Leaderboard extends Component {
  state = {
    leaders: null,
    error: false
  }

  componentDidMount = () => {
    this.setState({
      leaders: [
        { name: "Pupuce", score: "12260", id: "kcher", },
        { name: "Lewiss", score: "09999", id: "fkhar", },
        { name: "Maggie", score: "00123", id: "zefad", },
        { name: "Cartmn", score: "00100", id: "raere", },
        { name: "Toriko", score: "00000", id: "aregg", },
      ]
    })
  }

  render() {
    let rows = <p>Loading...!</p>;

    if (this.state.leaders) {
      rows = this.state.leaders.map((leader, index) => {
        return <div key={leader.id}>
          <p><span>{index + 1}</span> {leader.name}</p>
          <p>{leader.score}</p>
        </div>
      });
    }

    return <div className={classes.Leaderboard}>
      <h1>Leaderboard</h1>
      {rows}
    </div>;
  }
}

export default Leaderboard;