import React from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import Item from './Item';

const Tables = props => 
    <Paper className={props.classes.tables}>
        <Typography variant="display1">
            Dostępne stoły:
        </Typography>
        <Typography>
            {
                props.tables
                    .map(table => <Item key={table['ID_TABLE']} table={table}/>)
            }
        </Typography>
    </Paper>
;

const classes = {
    tables: {
        width: '60vw',
        minWidth: '450px',
        maxWidth: '1000px',
        margin: '15px auto 70px auto',
        padding: '20px 30px'
    }
}

export default withStyles(classes)(Tables);