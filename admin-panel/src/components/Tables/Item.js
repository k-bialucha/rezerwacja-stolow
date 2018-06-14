import React from 'react';

import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import ModeEditIcon from 'material-ui-icons/ModeEdit';
import BuildIcon from 'material-ui-icons/Build';
import { withStyles } from 'material-ui/styles';

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
                <Typography variant="subheading" color="textSecondary">
                    Typ: 
                    <span className={props.classes.highlightedText}>
                        {tables[props.table['ID_TYPE']].name}
                    </span>
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                    Liczba miejsc: {props.table['NUM_OF_SEATS']}
                </Typography>
            </CardContent>
            <div className={props.classes.controls}>
                <IconButton>
                    <BuildIcon className={props.classes.icon} />
                </IconButton>
                <IconButton onClick={props.toggleEditMode} >
                    <ModeEditIcon className={props.classes.icon} />
                </IconButton>
            </div>
        </div>
        <CardMedia
            className={props.classes.cover}
            image={tables[props.table['ID_TYPE']].image}
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
      width: '30%',
      margin: '2px'
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