import React from 'react';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import Button from 'material-ui/Button';
import DeleteIcon from 'material-ui-icons/Delete';
import { withStyles } from 'material-ui/styles';

const ReservationItem = props =>
    <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="headline">
                Rezerwacja nr {props.id}
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails 
            className={props.classes.details}
        >
            <Typography>
                Użytkownik: {props.userId} / Stół nr: {props.tableId} / {props.date}  [{props.startHour}-{props.endHour}]
            </Typography>
            <Button 
                variant="fab"
                color="secondary"
                className={props.classes.deleteButton}
                mini
            >
                <DeleteIcon />
            </Button>
        </ExpansionPanelDetails>
    </ExpansionPanel>
;

const classes = theme => ({
    details: {
        position: 'relative'
    },
    deleteButton: {
        position: 'absolute',
        bottom: '8px',
        right: '8px'
    }
})

export default withStyles(classes)(ReservationItem);