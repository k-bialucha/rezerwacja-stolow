import React, { Component } from 'react';

import './App.css';
import CssBaseline from 'material-ui/CssBaseline';

import Header from './Header/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
