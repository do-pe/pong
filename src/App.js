import React, { Component } from 'react';
import './App.css';

import init from './game/main';

class App extends Component {
  constructor() {
    super();

    this.state = {
      spin: false,
    }
  }

  componentDidMount() {
    init();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header" id="scoreDisplay">
          Yo!
        </div>
        <canvas id="canvas" width="320" height="240" className={this.state.spin ? 'spin' : ''}></canvas>
        <br/>
        <button onClick={() => this.setState({spin:!this.state.spin})}>Oh noes</button>
        <br/>
        <button onClick={() => localStorage.setItem("SOUND_OFF", "")}>&#x1f50a;</button>
        <button onClick={() => localStorage.setItem("SOUND_OFF", "1")}><s>&#x1f50a;</s></button>
      </div>
    );
  }
}

export default App;
