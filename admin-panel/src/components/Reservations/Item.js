import React from 'react';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import DeleteIcon from 'material-ui-icons/Delete';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import SaveIcon from 'material-ui-icons/Save';

import { withStyles } from 'material-ui/styles';

import ItemFields from './ItemFields';

const Item = props =>
    <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="headline">
                Rezerwacja nr {props.id}
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails 
            className={props.classes.details}
        >       
            <ItemFields
                userId={props.userId}
                tableId={props.tableId}
                date={props.date}
                updateField={props.updateField}
            />
            <Button 
                variant="fab"
                color="secondary"
                className={props.classes.deleteButton}
                mini
                onClick={() => props.deleteItem()}    
            >
                <DeleteIcon />
            </Button>
            <Button 
                variant="fab"
                color="primary"
                className={props.classes.updateButton}
                mini
                onClick={() => props.updateItem()}    
            >
                <SaveIcon />
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
    },
    updateButton: {
        position: 'absolute',
        bottom: '8px',
        right: '60px'
    }
})

export default withStyles(classes)(Item);