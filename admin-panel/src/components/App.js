import React, { Component } from 'react';

import './App.css';
import CssBaseline from 'material-ui/CssBaseline';

import Header from './Header/Header';
import AppBody from './AppBody/AppBody';
import BottomNav from './BottomNav/BottomNav';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            route: 'reservations'
        }
    }
    changeRoute(event, value) {
        this.setState({ route: value })
    }
    render() {
        return (
            <div className="App">
                <CssBaseline />
                <Header />
                <AppBody
                    route={this.state.route}
                />
                <BottomNav
                    route={this.state.route}
                    changeRoute={this.changeRoute.bind(this)}
                />
            </div>
        );
    }
}

export default App;
