import React, { Component } from 'react';
import Spinner from '../UI/Spinner/Spinner';
import classes from './Game.module.css';

class Game extends Component {
  state = {
    distributions: null,
    gameStarted: false,
    loading: true,
    error: false,
    player: {
      level: 1,
      name: "",
      currentScore: 0,
      totalScore: 0,
    }
  }

  nameInput = React.createRef();

  componentDidMount = () => {
    
  }

  startGameHandler = () => {
    const username = this.nameInput.current.value;

    this.setState(oldState => (
      {
        gameStarted: true,
        player: {
          ...oldState.player,
          name: username
        }
      }
    ), console.log(this.state))
  };

  render() {
    const display = <Spinner />;

    // return (
    //   <div className={classes.Game}>
    //     <Modal show>
    //       <div>
    //         <label>Choose your username :</label>
    //         <input type="text" ref={this.nameInput} />
    //       </div>
    //       <button onClick={this.startGameHandler}>Start game</button>
    //     </Modal>
    //   </div>
    // );

    return <div className={classes.Game}>
      {display}
    </div>;
  }
}

export default Game;