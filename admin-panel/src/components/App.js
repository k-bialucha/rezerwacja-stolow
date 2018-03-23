import React, { Component } from 'react';

import './App.css';
import CssBaseline from 'material-ui/CssBaseline';

import Header from './Header/Header';
import AppBody from '../AppBody/AppBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CssBaseline />
        <Header />
        <AppBody />
      </div>
    );
  }
}

export default App;
