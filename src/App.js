import React, { Component } from 'react';
import GameContainer from './containers/GameContainer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <GameContainer />
      </div>
    );
  }
}

export default App;
