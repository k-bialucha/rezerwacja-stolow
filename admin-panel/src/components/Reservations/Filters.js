import React from 'react';

import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const Filters = props => {
    return (
        <Paper style={style}>
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
        </Paper>
    );
}

const style = { 
    display: 'flex', 
    justifyContent: 'space-evenly',
    margin: '5px 22px 20px 22px',
    padding: '12px 15px'
}

export default Filters;