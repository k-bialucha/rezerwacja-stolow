import React from 'react';

import TextField from 'material-ui/TextField';
import Dialog, {
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

const SignIn = props =>
    <Dialog
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
    >
        <DialogTitle id="form-dialog-title">
            Logowanie
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
            />
            <TextField
                value={props.password}
                onChange={props.updateField}
                margin="dense"
                name="password"
                label="Hasło"
                type="password"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Anuluj
            </Button>
            <Button onClick={props.handleClose} color="primary" variant="raised" >
                Zaloguj
            </Button>
        </DialogActions>
    </Dialog>

export default SignIn;