import React from 'react';
import { connect } from 'react-redux';
import {
  closePopup,
  selectColumn,
  incrementMovesCounter,
  didWrongMove,
  resetGame,
  showPopupVictory,
} from './actions';
import './app.scss';

const App = ({
  popup,
  columns,
  selectedColumn,
  movesNumber,
  wrongMoveStatus,
  ...props
}) => {
  const canMoveDisk = (fromColumn, toColumn) => {
    const fromTopDisk = fromColumn.length > 0 ? fromColumn[0] : false;
    const toTopDisk = toColumn.length > 0 ? toColumn[0] : false;

    if (fromTopDisk) {
      if (toTopDisk && toTopDisk.id > fromTopDisk.id) {
        props.incrementMovesCounter(movesNumber);
        return true;
      }

      if (toTopDisk) {
        props.didWrongMove('You must put smaller disk on bigger ones');
        return false;
      }

      props.incrementMovesCounter(movesNumber);
      return true;
    }

    props.didWrongMove('Cannot move disk from empty column');
    return false;
  };

  const handleColumnClick = (id) => {
    if (selectedColumn < 0) {
      props.selectColumn(id);
    } else {
      const fromColumn = columns[selectedColumn];
      const toColumn = columns[id];

      if (canMoveDisk(fromColumn, toColumn)) {
        props.didWrongMove(false);
        const disk = fromColumn.shift();
        toColumn.unshift(disk);

        if (columns[0].length === 0 && columns[1].length === 0) {
          props.showPopupVictory();
        }
      }

      props.selectColumn(-1);
    }
  };

  return (
    <>
      <header>
        <h1 className="pageTitle" onClick={props.resetGame}>Tower of Hanoi</h1>
      </header>
      <main>
        {columns.map((t, ti) => (
          <div
            key={ti}
            onClick={() => { handleColumnClick(ti); }}
            className={`column ${selectedColumn === ti ? 'selected' : ''}`}
          >
            {t.map(b => (
              <div className={b.class} key={b.id}>{b.id}</div>
            ))}
          </div>
        ))}
      </main>
      <div className={`popup ${popup ? 'on' : 'off'}`}>
        <span className="text" onClick={props.closePopup}>{popup}</span>
      </div>
      <div className="movesCounter infoBox">{`Moves: ${movesNumber}`}</div>
      <div
        className={`wrongMove infoBox ${wrongMoveStatus ? 'on' : 'off'}`}
      >
        {wrongMoveStatus}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  popup: state.popup,
  columns: state.columns,
  selectedColumn: state.selectedColumn,
  movesNumber: state.movesNumber,
  wrongMoveStatus: state.wrongMoveStatus,
});

const mapDispatchToProps = {
  closePopup,
  selectColumn,
  incrementMovesCounter,
  didWrongMove,
  resetGame,
  showPopupVictory,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
