import React from 'react';

import { withAuthContext } from '../../authContext';

import IconButton from 'material-ui/IconButton';
import AcountIcon from 'material-ui-icons/AccountCircle';

import SignInContainer from './SignInContainer';

class Authentication extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isWindowOpen: false
        }
    }
    handleClickOpen = () => {
        this.setState({ isWindowOpen: true });
    }
    handleClose = () => {
        this.setState({ isWindowOpen: false });
    }
    render() {
        return (
            <React.Fragment>
                <IconButton 
                    color={this.props.auth.isAuthenticated ? 'default' : 'secondary'}
                    aria-label="Menu"
                    onClick={this.handleClickOpen}
                >
                    <AcountIcon />
                </IconButton>
                <SignInContainer
                    isAuthenticated={this.props.auth.isAuthenticated}
                    signIn={this.props.signIn}
                    isWindowOpen={this.state.isWindowOpen}
                    handleClose={this.handleClose}
                />
            </React.Fragment>
        );
    }
}
export default withAuthContext(Authentication);