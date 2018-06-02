import React from 'react';

import './Header.css';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Authentication from './../Authentication/Authentication';

const Header = () =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit" className="Header__title">
                Admin Panel
            </Typography>
            <Authentication />
        </Toolbar>
    </AppBar>
;

export default Header;