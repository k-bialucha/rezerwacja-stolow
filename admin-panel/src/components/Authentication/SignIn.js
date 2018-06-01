import React from 'react';

import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { LinearProgress } from 'material-ui/Progress';

const SignIn = props =>
    <Dialog
        open={props.isOpen}
        onClose={props.handleClose}
        disableBackdropClick
        aria-labelledby="form-dialog-title"
    >
        <DialogTitle id="form-dialog-title">
            <Typography color={!props.hasError ? 'inherit' : 'error'} variant="title">
                { !props.hasError ? 
                    'Logowanie' 
                    : 'Logowanie nieudane'
                }
            </Typography>
        </DialogTitle>
        <DialogContent>
            <TextField
                autoFocus
                value={props.username}
                onChange={props.updateField}
                margin="dense"
                name="username"
                label="Login"
                fullWidth
                error={props.hasError}
            />
            <TextField
                value={props.password}
                onChange={props.updateField}
                margin="dense"
                name="password"
                label="Hasło"
                type="password"
                fullWidth
                error={props.hasError}
            />
        </DialogContent>
        <DialogActions>
            <Button 
                onClick={props.handleClose}
                color="primary"
            >
                Anuluj
            </Button>
            <Button 
                onClick={props.signIn}
                color="primary"
                variant="raised"
                disabled={props.showLoading}
            >
                Zaloguj
            </Button>
        </DialogActions>
        {props.showLoading ?
            <LinearProgress 
                variant="query"
                color="secondary"
            />
            : null
        }
    </Dialog>

export default SignIn;