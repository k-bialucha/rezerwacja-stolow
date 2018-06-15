import React from 'react';

import './Reservations.css';

import Item from './ItemContainer';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { FormControlLabel } from 'material-ui/Form';
import Switch from 'material-ui/Switch';

import ReservationsLoading from './ReservationsLoading';

const sorter = (item1, item2) => {
    const date1 = new Date(item1['DATE']);
    const date2 = new Date(item2['DATE']);
    if (date1 === date2)
        return 0;
    return (date1 > date2) ? 1 : -1;
};

const Reservations = props => {
    const reservations = props.reservations
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
                cancelled={reservation['CONFIRMED']}
                deleteItem={() => props.deleteReservationItem(reservation['ID_RES'])}
                cancelItem={() => props.cancelReservationItem(reservation['ID_RES'])}
                updateItem={newFields => {
                    const updatedItem = { ...reservation, ...newFields }
                    return props.updateReservationItem(reservation['ID_RES'], updatedItem)}
                }
            />
        );
    return (
        <Paper className="Reservations">
            {props.areReservationsLoaded ?
                (reservations.length > 0 ?
                    <React.Fragment>
                        <Typography variant="display1">
                            Nadchodzące rezerwacje
                        </Typography>
                        <FormControlLabel
                            control={
                                <Switch
                                checked={false}
                                onChange={undefined}
                                value={false}
                                />
                            }
                            label="Filtry"
                        />
                        <div className="Reservations-list">
                            { reservations }
                        </div>
                    </React.Fragment>
                    : 
                    <React.Fragment>
                        <Typography variant="text">
                            Brak rezerwacji
                        </Typography>
                    </React.Fragment>
                )
                : <ReservationsLoading />
            }
        </Paper>
    );
}

export default Reservations;