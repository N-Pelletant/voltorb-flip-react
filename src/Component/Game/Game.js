import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import classes from './Game.module.css';
import distributions from '../../assets/Distributions';
import Cockpit from './Cockpit/Cockpit';

class Game extends Component {
  state = {
    distributions: distributions,
    inputUsername: true,
    player: {
      level: 1,
      name: "",
      currentScore: 0,
      totalScore: 0,
    }
  }

  nameInput = React.createRef();

  startGameHandler = () => {
    const username = this.nameInput.current.value;

    this.setState(oldState => (
      {
        inputUsername: !oldState.inputUsername,
        player: {
          ...oldState.player,
          name: username
        }
      }
    ))
  };

  render() {
    return <div className={classes.Game}>
      <Modal show={this.state.inputUsername}>
        <div>
          <label>Choose your username :</label>
          <input type="text" ref={this.nameInput} />
        </div>
        <button onClick={this.startGameHandler}>Start game</button>
      </Modal>
      <Cockpit {...this.state.player}/>
    </div>;
  }
}

export default Game;