import React from 'react';

import './Reservations.css';

import ReservationItem from './ReservationItem';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

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
        <Paper className="Reservations">
            <Typography variant="display1">
                Rezerwacje:
            </Typography>
            <div className="Reservations-list">
                {reservations}
            </div>
        </Paper>
    );
}

export default Reservations;