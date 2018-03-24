import React from 'react';

const Reservations = props => {
    const reservations = props.reservations
        .map( (reservation, index) => 
            <div className="Reservation">
                <p>{index+1}. ID: {reservation['ID_RES']}</p>
                <p>Użytkownik: {reservation['ID_USER']}</p>
                <p>Stół nr: {reservation['ID_TABLE']}</p>
                <p>Data: {reservation['DATE']} {reservation['HOUR_FROM']}-{reservation['HOUR_TO']} </p>
            </div>
        );
    return (
        <div>
            Reservations:
            {reservations}
        </div>
    );
}

export default Reservations;