import React from 'react';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    ExpansionPanelActions
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';

import DeleteIcon from 'material-ui-icons/Delete';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import SaveIcon from 'material-ui-icons/Save';

import ItemFields from './ItemFields';

const Item = props =>
    <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div>
                <Typography variant="headline">
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

export default Item;