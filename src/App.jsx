import React from 'react';
import { connect } from 'react-redux';
import { selectColumn } from './actions';
import './app.scss';

const App = ({ selectedColumn, columns, ...props }) => {
  const canMoveDisk = (fromTower, toTower) => {
    const fromTopDisk = fromTower.length > 0 ? fromTower[0] : false;
    const toTopDisk = toTower.length > 0 ? toTower[0] : false;

    if (fromTopDisk) {
      if (toTopDisk && toTopDisk.id > fromTopDisk.id) {
        return true;
      }

      return !toTopDisk;
    }
    return false;
  };

  const handleTowerClick = (id) => {
    if (selectedColumn < 0) {
      props.selectColumn(id);
    } else {
      const fromTower = columns[selectedColumn];
      const toTower = columns[id];

      if (canMoveDisk(fromTower, toTower)) {
        const disk = fromTower.shift();
        toTower.unshift(disk);
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
            onClick={() => { handleTowerClick(ti); }}
            className={`tower ${selectedColumn === ti ? 'selected' : ''}`}
          >
            {t.map(b => (
              <div className={b.class} key={b.id}>{b.id}</div>
            ))}
          </div>
        ))}
      </main>
    </>
  );
};

const mapStateToProps = state => ({
  selectedColumn: state.selectedColumn,
  columns: state.columns,
});
const mapDispatchToProps = { selectColumn };

export default connect(mapStateToProps, mapDispatchToProps)(App);
