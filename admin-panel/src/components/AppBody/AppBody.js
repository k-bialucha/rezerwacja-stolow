import React from 'react';

import './AppBody.css';

import ReservationsContainer from '../Reservations/ReservationsContainer';
import TableContainer from './../Tables/TablesContainer';

const AppBody = props =>
    <div className="AppBody">
        {props.route === 'reservations' ?
            <ReservationsContainer />
            : null
        }
        {props.route === 'tables' ?
            <TableContainer />
            : null
        }
    </div>
;

export default AppBody;