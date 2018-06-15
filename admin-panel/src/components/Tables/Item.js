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
import { LinearProgress } from 'material-ui/Progress';

import poolPicture from '../../images/pool.png';
import snookerPicture from '../../images/snooker.png';
import karambolPicture from '../../images/karambol.png';

const Item = props =>
    <Card className={props.classes.card}>
        <div className={props.classes.details}>
            <CardContent className={props.classes.content}>
                <Typography variant="headline">
                    Stół: {props.table['ID_TABLE']}
                </Typography>
                {props.editMode ?
                    <React.Fragment>
                        <Typography variant="subheading" color="textSecondary">
                            <div className={props.classes.fieldContainer}>
                                <span className={props.classes.fieldLabel}>Typ: {' '}</span>
                                <Select
                                    value={props.tableChanges['ID_TYPE'] || props.table['ID_TYPE']}
                                    onChange={event => props.updateField('ID_TYPE', event.target.value)}
                                    displayEmpty
                                    name="table-type"
                                    className={props.classes.field}
                                >
                                    <MenuItem value={1}>Pool</MenuItem>
                                    <MenuItem value={2}>Snooker</MenuItem>
                                    <MenuItem value={3}>Karambol</MenuItem>
                                </Select>
                            </div>
                        </Typography>
                        <Typography variant="subheading" color="textSecondary">
                            <div className={props.classes.fieldContainer}>
                                <span className={props.classes.fieldLabel}>Liczba miejsc: </span>
                                <TextField
                                    name="num_of_seats"
                                    value={props.tableChanges['NUM_OF_SEATS'] || props.table['NUM_OF_SEATS']}
                                    type="number"
                                    onChange={event => props.updateField('NUM_OF_SEATS', event.target.value)}
                                    className={props.classes.field}
                                />
                            </div>
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
                    <IconButton onClick={props.handleUpdateButtonClick} disabled={props.showLoading} >
                        <SaveIcon className={props.classes.icon} color={props.showLoading ? "default" : "primary"}/>
                    </IconButton>
                    <IconButton onClick={props.toggleEditMode} disabled={props.showLoading} >
                        <CancelIcon className={props.classes.icon} color={props.showLoading ? "default" : "secondary"} />
                    </IconButton>
                </React.Fragment>
                :
                <IconButton onClick={props.toggleEditMode} >
                    <ModeEditIcon className={props.classes.icon} />
                </IconButton>
            }
            </div>
        {props.showLoading ?
            <LinearProgress 
                variant="query"
                color="secondary"
            />
            : null
        }
        </div>
        <CardMedia
            className={props.classes.cover}
            image={tables[props.tableChanges['ID_TYPE'] || props.table['ID_TYPE']].image}
            title={tables[props.table['ID_TYPE']].name}
        />
    </Card>
;

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
      justifyContent: 'space-evenly',
      margin: '2px 10%'
    },
    icon: {
      height: 34,
      width: 34,
    },
    highlightedText: {
        color: theme.palette.primary.main,
        fontWeight: 700
    },
    field: {
        marginLeft: '5px',
        width: '140px'
    },
    fieldLabel: {
        marginLeft: '5px',
        width: '120px'
    },
    fieldContainer: {
        display: 'flex',
        width: '330px',
        alignItems: 'center',
        marginTop: '5px'
    }
});

export default withStyles(classes, { withTheme: true })(Item);