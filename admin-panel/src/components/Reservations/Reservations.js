import React from 'react';

import './Reservations.css';

import ReservationItem from './ReservationItem';

const Reservations = props => {
    const reservations = props.reservations
        .map( (reservation, index) => 
            <ReservationItem 
                key={index}
                id={reservation['ID_RES']}
                date={reservation['DATE']}
                startHour={reservation['HOUR_FROM']}
                endHour={reservation['HOUR_TO']}
                tableId={reservation['ID_TABLE']}
                userId={reservation['ID_USER']}
            />
        );
    return (
        <div className="Reservations">
            <h4>Reservations:</h4>
            {reservations}
        </div>
    );
}

export default Reservations;