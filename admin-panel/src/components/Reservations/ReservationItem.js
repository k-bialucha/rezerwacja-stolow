import React from 'react';

import ExpansionPanel, {
    ExpansionPanelSummary,
    ExpansionPanelDetails,
} from 'material-ui/ExpansionPanel';
import Typography from 'material-ui/Typography';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';

const ReservationItem = props =>
    <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography variant="headline">
                Rezerwacja nr {props.id}
            </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
            <Typography>
                Użytkownik: {props.userId} / Stół nr: {props.tableId} / {props.date}  [{props.startHour}-{props.endHour}]
            </Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>
;

export default ReservationItem;