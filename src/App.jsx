import React from 'react';
import { connect } from 'react-redux';
import { selectColumn } from './actions';
import './app.scss';

const App = ({ selectedColumn, columns, ...props }) => {
  const canMoveDisk = (fromColumn, toColumn) => {
    const fromTopDisk = fromColumn.length > 0 ? fromColumn[0] : false;
    const toTopDisk = toColumn.length > 0 ? toColumn[0] : false;

    if (fromTopDisk) {
      if (toTopDisk && toTopDisk.id > fromTopDisk.id) {
        return true;
      }

      return !toTopDisk;
    }
    return false;
  };

  const handleColumnClick = (id) => {
    if (selectedColumn < 0) {
      props.selectColumn(id);
    } else {
      const fromColumn = columns[selectedColumn];
      const toColumn = columns[id];

      if (canMoveDisk(fromColumn, toColumn)) {
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
    </>
  );
};

const mapStateToProps = state => ({
  selectedColumn: state.selectedColumn,
  columns: state.columns,
});
const mapDispatchToProps = { selectColumn };

export default connect(mapStateToProps, mapDispatchToProps)(App);
