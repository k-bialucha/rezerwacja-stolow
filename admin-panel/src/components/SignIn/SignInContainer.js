import React from 'react';

import { withAuthContext } from '../../authContext';

import SignIn from './SignIn';

class SignInContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
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
    handleSignIn() {
        const { username, password } = this.state;
        this.props.signIn(username, password)
            .then(() => {
                this.setState({
                    username: '',
                    password: ''
                });
            })
    }
    render() {
        return (
            <SignIn 
                isOpen={this.props.isWindowOpen}
                handleClose={this.props.handleClose}
                updateField={this.updateField.bind(this)}
                username={this.state.username}
                password={this.state.password}
                signIn={this.handleSignIn.bind(this)}
            />
        );
    }
}
export default SignInContainer;