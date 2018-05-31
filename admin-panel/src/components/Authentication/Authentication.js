import React from 'react';

import { withAuthContext } from '../../authContext';

import IconButton from 'material-ui/IconButton';
import AcountIcon from 'material-ui-icons/AccountCircle';

import SignInContainer from './SignInContainer';
import UserPanel from './UserPanel';

class Authentication extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            openWindow: undefined
        }
    }
    handleClickOpen() {
        const windowToOpen = this.props.auth.isAuthenticated ? 'userPanel' : 'signIn';
        this.setState({ openWindow: windowToOpen })
    }
    handleClose() {
        this.setState({ openWindow: undefined })
    }
    render() {
        return (
            <React.Fragment>
                <IconButton 
                    color={this.props.auth.isAuthenticated ? 'default' : 'secondary'}
                    aria-label="Menu"
                    onClick={this.handleClickOpen.bind(this)}
                >
                    <AcountIcon />
                </IconButton>
                <SignInContainer
                    signIn={this.props.auth.signIn}
                    isWindowOpen={this.state.openWindow === 'signIn'}
                    handleClose={this.handleClose.bind(this)}
                />
                <UserPanel 
                    signOut={this.props.auth.signOut}
                    isWindowOpen={this.state.openWindow === 'userPanel'}
                    handleClose={this.handleClose.bind(this)}    
                />
            </React.Fragment>
        );
    }
}
export default withAuthContext(Authentication);