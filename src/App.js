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
        <canvas id="canvas" width="200" height="200" className={this.state.spin ? 'spin' : ''}></canvas>
        <br/>
        <button onClick={() => this.setState({spin:true})}>Oh noes</button>
      </div>
    );
  }
}

export default App;
