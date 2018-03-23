import React from 'react';

import './Header.css';

import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import AcountIcon from 'material-ui-icons/AccountCircle';

const Header = () =>
    <AppBar position="static">
        <Toolbar>
            <Typography variant="title" color="inherit" className="Header__title">
                Admin Panel
            </Typography>
            <IconButton color="inherit" aria-label="Menu">
                <AcountIcon />
            </IconButton>
        </Toolbar>
    </AppBar>
;

export default Header;