import React from 'react';

import './AppBody.css';

import { withAuthContext } from '../../authContext';

import ReservationsContainer from '../Reservations/ReservationsContainer';
import TableContainer from './../Tables/TablesContainer';

const AppBody = props => {
    if (!props.auth.isAuthenticated)
        return <div className="app-body__niezalogowany">Brak dostępu, proszę się zalogować.</div>
    return <div className="AppBody">
        {props.route === 'reservations' ?
            <ReservationsContainer />
            : null
        }
        {props.route === 'tables' ?
            <TableContainer />
            : null
        }
    </div>
};

export default withAuthContext(AppBody);