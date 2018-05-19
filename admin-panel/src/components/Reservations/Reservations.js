import React from 'react';

import './Reservations.css';

import Item from './ItemContainer';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';

const sorter = (item1, item2) => {
    const isDateLater = new Date(item1['DATE']) > new Date(item2['DATE']);
    if (isDateLater) 
        return 1
    const isFirstBigger = Number.parseInt(item1['ID_RES'], 10) > Number.parseInt(item2['ID_RES'], 10);
    return isFirstBigger ? 1 : -1;
};

const Reservations = props => {
    const awaiting = props.awaitingReservations
        .sort(sorter)
        .map(reservation => 
            <Item 
                key={reservation['ID_RES']}
                id={reservation['ID_RES']}
                unconfirmed
                date={reservation['DATE']}
                startHour={reservation['HOUR_FROM']}
                endHour={reservation['HOUR_TO']}
                tableId={reservation['ID_TABLE']}
                userId={reservation['ID_USER']}
                deleteItem={() => props.deleteReservationItem(reservation['ID_RES'])}
                updateItem={newFields => {
                    const updatedItem = { ...reservation, ...newFields }
                    return props.updateReservationItem(reservation['ID_RES'], updatedItem)}
                }
            />
        );
    const confirmed = props.confirmedReservations
        .sort(sorter)
        .map(reservation => 
            <Item 
                key={reservation['ID_RES']}
                id={reservation['ID_RES']}
                date={reservation['DATE']}
                startHour={reservation['HOUR_FROM']}
                endHour={reservation['HOUR_TO']}
                tableId={reservation['ID_TABLE']}
                userId={reservation['ID_USER']}
                deleteItem={() => props.deleteReservationItem(reservation['ID_RES'])}
                updateItem={newFields => {
                    const updatedItem = { ...reservation, ...newFields }
                    return props.updateReservationItem(reservation['ID_RES'], updatedItem)}
                }
            />
        );
    return (
        <Paper className="Reservations">
            <Typography variant="display1">
                Rezerwacje oczekujące na potwierdzenie:
            </Typography>
            <div className="Reservations-list">
                {props.areReservationsLoaded ?
                    awaiting
                    :
                    <div>
                        Ładowanie rezerwacji 
                        <LinearProgress color="secondary" variant="query" />
                    </div>
                }
            </div>
            <Typography variant="display1">
                Potwierdzone rezerwacje:
            </Typography>
            <div className="Reservations-list">
                {props.areReservationsLoaded ? 
                    confirmed 
                    :
                    <div>
                        Ładowanie rezerwacji 
                        <LinearProgress variant="query" />
                    </div>
                }
            </div>
        </Paper>
    );
}

export default Reservations;