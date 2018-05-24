import React from 'react';

import IconButton from 'material-ui/IconButton';
import AcountIcon from 'material-ui-icons/AccountCircle';

import SignIn from './SignIn';

class SignInContainer extends React.Component {
    state = {
        isOpen: false,
    }
    handleClickOpen = () => {
        this.setState({ isOpen: true });
    }
    handleClose = () => {
        this.setState({ isOpen: false });
    }
    render() {
        return (
            <React.Fragment>
                <IconButton color="inherit" aria-label="Menu" onClick={this.handleClickOpen}>
                    <AcountIcon />
                </IconButton>
                <SignIn 
                    isOpen={this.state.isOpen}
                    handleClose={this.handleClose}
                />
            </React.Fragment>
        );
    }
}
export default SignInContainer;