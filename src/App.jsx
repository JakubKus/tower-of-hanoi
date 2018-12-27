import React, { Component } from 'react';
import './app.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstTower: [
        { id: 1, class: 'one' },
        { id: 2, class: 'two' },
        { id: 3, class: 'three' },
        { id: 4, class: 'four' },
      ],
      secondTower: [],
      thirdTower: [],
    };
  }

  render() {
    const { firstTower, secondTower, thirdTower } = this.state;
    return (
      <main>
        <div className="tower">
          {firstTower.map(bl => (
            <div key={bl.id} className={bl.class}>
              {bl.id}
            </div>
          ))}
        </div>
        <div className="tower">
          {secondTower.map(bl => (
            <div key={bl.id} className={bl.class}>
              {bl.id}
            </div>
          ))}
        </div>
        <div className="tower">
          {thirdTower.map(bl => (
            <div key={bl.id} className={bl.class}>
              {bl.id}
            </div>
          ))}
        </div>
      </main>
    );
  }
}
