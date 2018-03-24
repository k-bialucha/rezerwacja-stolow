import React from 'react';

const Reservations = props => {
    const reservations = props.reservations
        .map( (reservation, index) => 
            <div>{index+1}. {JSON.stringify(reservation)}</div>
        );
    return (
        <div>
            Reservations:
            {reservations}
        </div>
    );
}

export default Reservations;