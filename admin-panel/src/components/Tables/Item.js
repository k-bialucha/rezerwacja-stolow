import React from 'react';

import Card, { CardContent, CardMedia } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import SkipPreviousIcon from 'material-ui-icons/SkipPrevious';
import PlayArrowIcon from 'material-ui-icons/PlayArrow';
import SkipNextIcon from 'material-ui-icons/SkipNext';
import { withStyles } from 'material-ui/styles';

const Item = props => {
    return (
        <Card className={props.classes.card}>
        <div className={props.classes.details}>
            <CardContent className={props.classes.content}>
                <Typography variant="headline">
                    Stół: {props.table['ID_TABLE']}
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                    Typ <Typography color="primary">{props.table['ID_TYPE']}</Typography>
                </Typography>
                <Typography variant="subheading" color="textSecondary">
                    Liczba miejc: {props.table['NUM_OF_SEATS']}
                </Typography>
            </CardContent>
            <div className={props.classes.controls}>
                <IconButton aria-label="Previous">
                    <SkipPreviousIcon />
                </IconButton>
                <IconButton aria-label="Play/pause">
                    <PlayArrowIcon className={props.classes.playIcon} />
                </IconButton>
                <IconButton aria-label="Next">
                    <SkipNextIcon />
                </IconButton>
            </div>
        </div>
        <CardMedia
            className={props.classes.cover}
            image="http://www.stixbilliard.club/assets/img/blogs/snooker.jpg"
            title="Snooker"
        />
        </Card>
);
}


const classes = {
    card: {
      display: 'flex',
      justifyContent: 'space-around',
      height: '20vh',
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
      margin: '5px'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-around'
    },
    playIcon: {
      height: 38,
      width: 38,
    }
}

export default withStyles(classes)(Item);