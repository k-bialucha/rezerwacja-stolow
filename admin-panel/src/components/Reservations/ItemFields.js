import React from 'react';

import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';

const ItemFields = props =>
    <Grid container spacing={24}>
        <Grid item xs={6}>
            <TextField
                label="ID stołu"
                name="tableId"
                value={props.tableId}
                type="number"
                onChange={props.updateField}
                fullWidth
                disabled={props.disabled}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Data"
                name="date"
                value={props.date}
                type="date"
                onChange={props.updateField}
                fullWidth
                disabled={props.disabled}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Godzina rozpoczęcia"
                name="startHour"
                value={props.startHour}
                type="number"
                onChange={props.updateField}
                fullWidth
                disabled={props.disabled}
            />
        </Grid>
        <Grid item xs={6}>
            <TextField
                label="Godzina zakończenia"
                name="endHour"
                value={props.endHour}
                type="number"
                onChange={props.updateField}
                fullWidth
                disabled={props.disabled}
            />
        </Grid>
    </Grid>
;

export default ItemFields;