import React from 'react';

import IconButton from 'material-ui/IconButton';
import AcountIcon from 'material-ui-icons/AccountCircle';

import SignIn from './SignIn';

class SignInContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isWindowOpen: false,
            username: '',
            password: '',
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
    render() {
        return (
            <React.Fragment>
                <IconButton color="inherit" aria-label="Menu" onClick={this.handleClickOpen}>
                    <AcountIcon />
                </IconButton>
                <SignIn 
                    isOpen={this.state.isWindowOpen}
                    handleClose={this.handleClose}
                    updateField={this.updateField.bind(this)}
                    username={this.state.username}
                    password={this.state.password}
                />
            </React.Fragment>
        );
    }
}
export default SignInContainer;