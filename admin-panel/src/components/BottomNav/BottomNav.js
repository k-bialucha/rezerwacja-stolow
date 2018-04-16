import React from 'react';

import BottomNavigation, { BottomNavigationAction } from 'material-ui/BottomNavigation';
import EventIcon from 'material-ui-icons/Event';
import ViewQuiltIcon from 'material-ui-icons/ViewQuilt';

import { withStyles } from 'material-ui/styles';

const BottomNav = props =>
    <BottomNavigation
        className={props.classes.bottomNav}
        value={props.route}
        onChange={props.changeRoute}
        showLabels
    >
        <BottomNavigationAction 
            label="Rezerwacje" 
            value="reservations" 
            icon={<EventIcon />} 
        />
        <BottomNavigationAction 
            label="Stoły" 
            value="tables" 
            icon={<ViewQuiltIcon />} 
        />
    </BottomNavigation>
;

const classes = {
    bottomNav: {
        position: 'fixed',
        bottom: '0',
        width: '100%',
        borderTop: '1px solid grey'
    }
}

export default withStyles(classes)(BottomNav);