import React from 'react';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    ExpansionPanelActions
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import DeleteIcon from 'material-ui-icons/Delete';
import CancelIcon from 'material-ui-icons/Cancel';
import SaveIcon from 'material-ui-icons/Save';
import ConfirmIcon from 'material-ui-icons/TouchApp';

import { LinearProgress } from 'material-ui/Progress';

import ItemFields from './ItemFields';

const Item = props =>
    <ExpansionPanel className={props.classes.expansionPanel} >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <div>
                <Typography 
                    variant="headline" 
                    color={props.cancelled ? 'textSecondary': 'default'}
                >
                    Rezerwacja nr {props.id}
                </Typography>
                <Typography 
                    variant="subheading"
                    color={props.cancelled ? 'textSecondary': 'primary'}
                >
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
                disabled={props.cancelled || props.isItemLoading}
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
            {!props.cancelled &&
                <Button 
                    color="secondary"
                    mini
                    onClick={props.cancelItem}
                    disabled={props.isItemLoading} 
                >
                    <CancelIcon /> Anuluj
                </Button>
            }
            {!props.cancelled &&
            <Button 
                color="primary"
                mini
                onClick={props.updateItem}
                disabled={props.isItemLoading} 
            >
                <SaveIcon /> Zapisz
            </Button>
            }
        </ExpansionPanelActions>
        {props.isItemLoading ?
            <LinearProgress 
                variant="query"
                color="secondary"
            />
            : null
        }
    </ExpansionPanel>
;

const classes = {
    expansionPanel: {
      margin: '10px 3px'
    }
};

export default withStyles(classes)(Item);