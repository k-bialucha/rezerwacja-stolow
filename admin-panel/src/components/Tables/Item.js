import React from 'react';

import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import BuildIcon from 'material-ui-icons/Build';
import CancelIcon from 'material-ui-icons/Cancel';
import SaveIcon from 'material-ui-icons/Save';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';
import Select from 'material-ui/Select';

import poolPicture from '../../images/pool.png';
import snookerPicture from '../../images/snooker.png';
import karambolPicture from '../../images/karambol.png';

const Item = props => {
    return (
        <Card className={props.classes.card}>
        <div className={props.classes.details}>
            <CardContent className={props.classes.content}>
                <Typography variant="headline">
                    Stół: {props.table['ID_TABLE']}
                </Typography>
                {props.editMode ?
                    <React.Fragment>
                        <Typography variant="subheading" color="textSecondary">
                            Typ: {' '}
                            <Select
                                value={props.tableChanges['ID_TYPE'] || props.table['ID_TYPE']}
                                onChange={event => props.updateField('ID_TYPE', event.target.value)}
                                displayEmpty
                                name="table-type"
                                className={classes.selectEmpty}
                            >
                                <MenuItem value={1}>Pool</MenuItem>
                                <MenuItem value={2}>Snooker</MenuItem>
                                <MenuItem value={3}>Karambol</MenuItem>
                            </Select>
                        </Typography>
                        <Typography variant="subheading" color="textSecondary">
                            Liczba miejsc: 
                            <TextField
                                name="num_of_seats"
                                value={props.tableChanges['NUM_OF_SEATS'] || props.table['NUM_OF_SEATS']}
                                type="number"
                                onChange={event => props.updateField('NUM_OF_SEATS', event.target.value)}
                            />
                        </Typography>
                    </React.Fragment>
                    :
                    <React.Fragment>
                        <Typography variant="subheading" color="textSecondary">
                            Typ: 
                            <span className={props.classes.highlightedText}>
                                {tables[props.table['ID_TYPE']].name}
                            </span>
                        </Typography>
                        <Typography variant="subheading" color="textSecondary">
                            Liczba miejsc: {props.table['NUM_OF_SEATS']}
                        </Typography>
                    </React.Fragment>
                }
            </CardContent>
            <div className={props.classes.controls}>
            {props.editMode?
                <React.Fragment>
                    <IconButton onClick={props.handleUpdateButtonClick} >
                        <SaveIcon className={props.classes.icon} />
                    </IconButton>
                    <IconButton onClick={props.toggleEditMode} >
                        <CancelIcon className={props.classes.icon} />
                    </IconButton>
                </React.Fragment>
                :
                <IconButton onClick={props.toggleEditMode} >
                    <ModeEditIcon className={props.classes.icon} />
                </IconButton>
            }
            </div>
        </div>
        <CardMedia
            className={props.classes.cover}
            image={tables[props.tableChanges['ID_TYPE'] || props.table['ID_TYPE']].image}
            title={tables[props.table['ID_TYPE']].name}
        />
        </Card>
);
}

const tables = {
    1: {
        name: 'POOL',
        image: poolPicture
    },
    2: {
        name: 'SNOOKER',
        image: snookerPicture
    },
    3: {
        name: 'KARAMBOL',
        image: karambolPicture
    },
};

const classes = theme => ({
    card: {
      display: 'flex',
      justifyContent: 'space-around',
      minHeight: '20vh',
      margin: '15px auto',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
      flex: 'auto'
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: '35%',
      margin: '8px'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around',
      margin: '3px 10%'
    },
    icon: {
      height: 34,
      width: 34,
    },
    highlightedText: {
        color: theme.palette.primary.main,
        fontWeight: 700
    }
});

export default withStyles(classes, { withTheme: true })(Item);