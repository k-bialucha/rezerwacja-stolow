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
                margin="dense"
                id="name"
                label="Email"
                type="email"
                fullWidth
            />
            <TextField
                margin="dense"
                id="password"
                label="Hasło"
                type="password"
                fullWidth
            />
        </DialogContent>
        <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Anuluj
            </Button>
            <Button onClick={props.handleClose} color="secondary">
                Zaloguj
            </Button>
        </DialogActions>
    </Dialog>

export default SignIn;