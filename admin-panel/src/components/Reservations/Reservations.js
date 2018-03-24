import React from 'react';

import './Reservations.css';

const Reservations = props => {
    const reservations = props.reservations
        .map( (reservation, index) => 
            <div key={index} className="Reservation">
                <p>{index+1}. ID: {reservation['ID_RES']}</p>
                <p>Użytkownik: {reservation['ID_USER']}</p>
                <p>Stół nr: {reservation['ID_TABLE']}</p>
                <p>Data: {reservation['DATE']} {reservation['HOUR_FROM']}-{reservation['HOUR_TO']} </p>
            </div>
        );
    return (
        <div className="Reservations">
            <h4>Reservations:</h4>
            {reservations}
        </div>
    );
}

export default Reservations;