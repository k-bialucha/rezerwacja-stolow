import React from 'react';

import SignIn from './SignIn';

class SignInContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            hasError: false
        }
    }
    updateField(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            hasError: false
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
            .catch(error => {
                this.setState({
                    username: '',
                    password: '',
                    hasError: true
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
                hasError={this.state.hasError}
            />
        );
    }
}
export default SignInContainer;