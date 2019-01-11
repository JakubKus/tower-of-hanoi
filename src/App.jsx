import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectTower } from './actions';
import './app.scss';

export class App extends Component {
  handleTowerClick = (id) => {
    const { selectedTower, towers } = this.props;

    if (selectedTower < 0) {
      this.props.selectTower(id);
    } else {
      const fromTower = towers[selectedTower];
      const toTower = towers[id];

      if (this.canMoveDisk(fromTower, toTower)) {
        const disk = fromTower.shift();
        toTower.unshift(disk);
      }

      this.props.selectTower(-1);
    }
  };

  canMoveDisk = (fromTower, toTower) => {
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

  render() {
    const { towers, selectedTower } = this.props;

    return (
      <>
        <header><h1 className="pageTitle">Tower of Hanoi</h1></header>
        <main>
          {
            towers.map((t, ti) => (
              <div
                key={ti}
                onClick={() => {
                  this.handleTowerClick(ti);
                }}
                className={`tower ${selectedTower === ti ? 'selected' : ''}`}
              >
                {
                  t.map(b => (
                    <div className={b.class} key={b.id}>{b.id}</div>
                  ))
                }
              </div>
            ))
          }
        </main>
      </>
    );
  }
}

const mapStateToProps = state => ({
  selectedTower: state.selectedTower,
  towers: state.towers,
});
const mapDispatchToProps = { selectTower };

App.propTypes = {
  selectedTower: PropTypes.number.isRequired,
  towers: PropTypes.instanceOf(Array).isRequired,
  selectTower: PropTypes.func.isRequired,
};

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
