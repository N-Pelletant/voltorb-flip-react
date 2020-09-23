import React, {Component} from 'react';
import classes from './Gameboard.module.css';
import Card from './Card/Card';
import Hint from './Hint/Hint';

class Gameboard extends Component {
  render() {
    const cards = this.props.board.map((elem, index) => {
      const gridPosition = [
        Math.floor(index / 5) + 1,
        index % 5 + 1,
        Math.floor(index / 5) + 2,
        index % 5 + 2,
      ];

      return (
        <Card
          key={'card' + index}
          index={index}
          value={elem.value}
          faceUp={elem.faceUp}
          flagged={elem.flagged}
          gridPosition={gridPosition.join('/')}
          clicked={this.props.cardClickedHandler}
          flag={this.props.flagged}
        />
      )
    });

    const hints = [];
    for (let i = 0; i < 5; i++) {
      const row = this.props.board.slice(i * 5, (i + 1) * 5);
      const rowHintGridPosition = [i + 1, 6, i + 2, 7];
      const rowHint = {
        sum: row.reduce((sum, elem) => sum + elem.value, 0),
        bomb: row.filter(elem => elem.value === 0).length,
        gridPosition: rowHintGridPosition.join('/'),
        key: "hint" + rowHintGridPosition.join(),
        colorId: i + 1,
      };

      const column = this.props.board.filter((elem, index) => index % 5 === i);
      const columnHintGridPosition = [6, i + 1, 7, i + 2];
      const columnHint = {
        sum: column.reduce((sum, elem) => sum + elem.value, 0),
        bomb: column.filter(elem => elem.value === 0).length,
        gridPosition: columnHintGridPosition.join('/'),
        key: "hint" + columnHintGridPosition.join(),
        colorId: i + 1,
      };

      hints.push(
        <Hint {...columnHint} />,
        <Hint {...rowHint} />
      );
    }

    return (
      <div className={classes.Gameboard}>
        {cards}
        {hints}
      </div>
    );
  }
}

export default Gameboard;