import React from 'react';

import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

const ReservationFields = props =>
    <Grid container spacing={24}>
        <Grid item xs={6}>
            <TextField
                label="ID użytkownika"
                name="userId"
                value={props.userId}
                onChange={event => props.updateField(event)}
                fullWidth
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Data"
                name="date"
                value={props.date}
                type="date"
                onChange={event => props.updateField(event)}
                fullWidth
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="ID stołu"
                name="tableId"
                value={props.tableId}
                onChange={event => props.updateField(event)}
                fullWidth
            />
        </Grid>
    </Grid>
    ;

export default ReservationFields;