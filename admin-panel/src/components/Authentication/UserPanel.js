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
            {props.isAuthenticated ?
                'Zalogowano!'
                : 'Wylogowano!'
            }
        </DialogTitle>
        <DialogActions>
            <Button
                onClick={props.handleClose}
                color="primary"
            >
                Anuluj
            </Button>
            <Button 
                onClick={props.signOut} 
                color="primary"
                variant="raised" 
                disabled={!props.isAuthenticated}
            >
                Wyloguj
            </Button>
        </DialogActions>
    </Dialog>

export default UserPanel;