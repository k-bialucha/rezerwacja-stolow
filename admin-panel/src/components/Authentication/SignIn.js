import React from 'react';

import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

const SignIn = props =>
    <Dialog
        open={props.isOpen}
        onClose={props.handleClose}
        disableBackdropClick
        aria-labelledby="form-dialog-title"
    >
        <DialogTitle id="form-dialog-title">
            { !props.hasError ? 
                'Logowanie' 
                : 'Logowanie nieudane'
            }
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
            <Button onClick={props.handleClose} color="primary">
                Anuluj
            </Button>
            <Button onClick={props.signIn} color="primary" variant="raised" >
                Zaloguj
            </Button>
        </DialogActions>
    </Dialog>

export default SignIn;