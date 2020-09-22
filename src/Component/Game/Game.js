import React, { Component } from 'react';
import Modal from '../UI/Modal/Modal';
import classes from './Game.module.css';
import Distributions from '../../assets/Distributions';
import Cockpit from './Cockpit/Cockpit';
import Gameboard from './Gameboard/Gameboard';

class Game extends Component {
  state = {
    distributions: Distributions,
    inputUsername: true,
    board: [],
    gameboard: null,
    maxScore: 0,
    loading: false,
    win: null,
    player: {
      level: 1,
      name: "",
      currentScore: 0,
      totalScore: 0,
    }
  }
  nameInput = React.createRef();

  nameInputHandler = () => {
    const username = this.nameInput.current.value;

    this.setState(oldState => (
      {
        inputUsername: !oldState.inputUsername,
        loading: true,
        player: {
          ...oldState.player,
          name: username
        }
      }
    ));

    this.startGameHandler();
  };

  startGameHandler = () => {
    let dist = this.state.distributions[this.state.player.level - 1][Math.floor(Math.random() * 5)];

    let board = [].concat(
      Array(dist["2"]).fill(2),
      Array(dist["3"]).fill(3),
      Array(dist["bomb"]).fill(0),
      Array(25).fill(1)
    ).splice(0, 25);

    const oldBoard = [...board]
    for (let i = 24; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * i);
      let tmp;

      tmp = board[i];
      board[i] = board[randomIndex];
      board[randomIndex] = tmp;
    }
    console.log(board);

    board = board.map(elem => ({
      value: elem,
      faceUp: false,
    }));

    const maxScore = board.reduce((acc, elem) => (elem.value !== 0 ? acc * elem.value : acc), 1);

    this.setState(() => ({
      board: board,
      maxScore: maxScore,
      loading: false,
      win: null,
    }));
  }

  updateScoreHandler = (index) => {
    const board = this.state.board;
    const card = board[index];

    if (!card.faceUp) {
      if (card.value === 0) {
        this.gameLoseHandler();
        return;
      }

      board[index] = {
        ...card,
        faceUp: true
      }

      this.setState(oldState => (
        {
          board: board,
          player: {
            ...oldState.player,
            currentScore: oldState.player.currentScore * card.value || card.value,
          }
        }
      ), () => {
        if (this.state.player.currentScore === this.state.maxScore)
          this.gameWinHandler();
      });

    }
  }

  gameLoseHandler = () => {
    this.setState(oldState => {
      return {
        loading: true,
        win: false,
        player: {
          ...oldState.player,
          currentScore: 0,
          level: oldState.player.level === 1 ? 1 : (oldState.player.level - 1),
        }
      }
    });
  }

  gameWinHandler = () => {
    this.setState(oldState => {
      return {
        loading: true,
        win: true,
        player: {
          ...oldState.player,
          totalScore: oldState.player.totalScore + oldState.player.currentScore,
          currentScore: 0,
          level: oldState.player.level === 8 ? 8 : (oldState.player.level + 1)
        }
      }
    });
  }

  render() {
    return <div className={classes.Game}>
      {/* Username input */}
      <Modal show={this.state.inputUsername}>
        <div>
          <label>Choose your username :</label>
          <input type="text" ref={this.nameInput} />
          <button onClick={this.nameInputHandler}>Start game</button>
        </div>
      </Modal>
      {/* End of game modal */}
      <Modal show={this.state.loading} reverse>
        <div>
          <p>{this.state.player.name} : {this.state.player.totalScore}</p>
          <button onClick={this.scoreUploadHandler}>Send score</button>
          or
          <button onClick={this.startGameHandler}>Continue</button>
        </div>
      </Modal>
      {/* Game display */}
      <Cockpit {...this.state.player} />
      <Gameboard board={this.state.board} cardClickedHandler={this.updateScoreHandler} />
    </div>;
  }
}

export default Game;