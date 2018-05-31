import React from 'react';

import { withAuthContext } from '../../authContext';

import IconButton from 'material-ui/IconButton';
import AcountIcon from 'material-ui-icons/AccountCircle';

import SignIn from './SignIn';

class SignInContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isWindowOpen: false,
            username: '',
            password: '',
        }
    }
    updateField(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleClickOpen = () => {
        this.setState({ isWindowOpen: true });
    }
    handleClose = () => {
        this.setState({ isWindowOpen: false });
    }
    handleSignIn() {
        const { username, password } = this.state;
        this.props.auth.signIn(username, password)
            .then(() => {
                this.setState({
                    username: '',
                    password: ''
                });
            })
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
                <SignIn 
                    isOpen={this.state.isWindowOpen}
                    handleClose={this.handleClose}
                    updateField={this.updateField.bind(this)}
                    username={this.state.username}
                    password={this.state.password}
                    signIn={this.handleSignIn.bind(this)}
                />
            </React.Fragment>
        );
    }
}
export default withAuthContext(SignInContainer);