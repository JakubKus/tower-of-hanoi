import React from 'react';
import { connect } from 'react-redux';
import { selectColumn, didWrongMove } from './actions';
import './app.scss';

const App = ({
  columns,
  selectedColumn,
  wrongMoveStatus,
  ...props
}) => {
  const canMoveDisk = (fromColumn, toColumn) => {
    const fromTopDisk = fromColumn.length > 0 ? fromColumn[0] : false;
    const toTopDisk = toColumn.length > 0 ? toColumn[0] : false;

    if (fromTopDisk) {
      if (toTopDisk && toTopDisk.id > fromTopDisk.id) {
        return true;
      }

      if (toTopDisk) {
        props.didWrongMove('You must put smaller disk on bigger ones');
        return false;
      }

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
      }

      props.selectColumn(-1);
    }
  };

  return (
    <>
      <header><h1 className="pageTitle">Tower of Hanoi</h1></header>
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
      <div
        className={wrongMoveStatus ? 'wrongMove on' : 'wrongMove off'}
      >
        {wrongMoveStatus}
      </div>
    </>
  );
};

const mapStateToProps = state => ({
  columns: state.columns,
  selectedColumn: state.selectedColumn,
  wrongMoveStatus: state.wrongMoveStatus,
});

const mapDispatchToProps = { selectColumn, didWrongMove };

export default connect(mapStateToProps, mapDispatchToProps)(App);
