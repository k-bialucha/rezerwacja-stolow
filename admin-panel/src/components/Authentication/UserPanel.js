import React from 'react';

import Dialog, {
    DialogTitle,
    DialogActions
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';

const UserPanel = props =>
    <Dialog
        open={props.isWindowOpen}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
    >
        <DialogTitle id="form-dialog-title">
            Zalogowano!
        </DialogTitle>
        <DialogActions>
            <Button onClick={props.handleClose} color="primary">
                Anuluj
            </Button>
            <Button onClick={props.signOut} color="secondary" variant="raised" >
                Wyloguj
            </Button>
        </DialogActions>
    </Dialog>

export default UserPanel;