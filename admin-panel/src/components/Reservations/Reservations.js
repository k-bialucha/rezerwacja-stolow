import React from 'react';

import './Reservations.css';

import ReservationItem from './ReservationItemContainer';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const sorter = (item1, item2) => {
    const isFirstBigger = Number.parseInt(item1['ID_RES'], 10)>Number.parseInt(item2['ID_RES'], 10);
    return isFirstBigger ? 1 : -1;
};

const Reservations = props => {
    const reservations = props.reservations
        .sort(sorter)
        .map(reservation => 
            <ReservationItem 
                key={reservation['ID_RES']}
                id={reservation['ID_RES']}
                date={reservation['DATE']}
                startHour={reservation['HOUR_FROM']}
                endHour={reservation['HOUR_TO']}
                tableId={reservation['ID_TABLE']}
                userId={reservation['ID_USER']}
                deleteItem={() => props.deleteReservationItem(reservation['ID_RES'])}
            />
        );
    return (
        <Paper className="Reservations">
            <Typography variant="display1">
                Rezerwacje:
            </Typography>
            <div className="Reservations-list">
                {props.reservations.length ? reservations : <div>Brak rezerwacji [ładowanie...]</div>}
            </div>
        </Paper>
    );
}

export default Reservations;