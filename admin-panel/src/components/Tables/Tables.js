import React from 'react';

import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

const Tables = props => 
    <Paper className={props.classes.tables}>
        <Typography variant="display1">
            Stoły:
        </Typography>
        <Typography>
            Tutaj znajdą się dostępne stoły
        </Typography>
    </Paper>
;

const classes = {
    tables: {
        width: '60vw',
        minWidth: '450px',
        maxWidth: '1000px',
        margin: '15px auto',
        padding: '20px 30px'
    }
}

export default withStyles(classes)(Tables);