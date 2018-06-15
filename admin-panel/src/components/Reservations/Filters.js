import React from 'react';
//import { Paper } from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const Filters = props => {
    return (
        <div className="Reservations-filters">
            <TextField
                name="date"
                type="date"
                label="Data"
                defaultValue={undefined}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={props.applyFilter}
            />
            <TextField
                name="id_table"
                type="number"
                label="ID stołu"
                defaultValue={undefined}
                InputLabelProps={{
                    shrink: true,
                }}
                onChange={props.applyFilter}
            />
        </div>
    );
}

export default Filters;