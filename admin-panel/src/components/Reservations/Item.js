import React from 'react';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    ExpansionPanelActions
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import DeleteIcon from 'material-ui-icons/Delete';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import SaveIcon from 'material-ui-icons/Save';

import ItemFields from './ItemFields';

const Item = props =>
    <ExpansionPanel className={props.classes.expansionPanel} >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div>
                <Typography 
                    variant="headline" 
                    {...props.unconfirmed ? { color: 'secondary'} : {}}
                >
                    Rezerwacja nr {props.id}
                </Typography>
                <Typography variant="subheading" color="primary">
                    {props.date} / godz. {props.startHour}-{props.endHour}
                </Typography>
            </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>       
            <ItemFields
                userId={props.userId}
                tableId={props.tableId}
                date={props.date}
                startHour={props.startHour}
                endHour={props.endHour}
                updateField={props.updateField}
            />
        </ExpansionPanelDetails>
        <ExpansionPanelActions>
            <Button 
                color="secondary"
                mini
                onClick={props.deleteItem}
                disabled={props.isItemLoading} 
            >
                <DeleteIcon /> Usuń
            </Button>
            <Button 
                color="primary"
                mini
                onClick={props.updateItem}
                disabled={props.isItemLoading} 
            >
                <SaveIcon /> Zapisz
            </Button>
        </ExpansionPanelActions>
    </ExpansionPanel>
;

const classes = {
    expansionPanel: {
      margin: '10px 3px'
    }
};

export default withStyles(classes)(Item);