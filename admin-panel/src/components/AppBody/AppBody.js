import React from 'react';

import './AppBody.css';

import NewReservationContainer from './../NewReservation/NewReservationContainer';
import ReservationsContainer from '../Reservations/ReservationsContainer';

const AppBody = () =>
    <div className="AppBody">
        <NewReservationContainer />
        <ReservationsContainer />
    </div>
;

export default AppBody;