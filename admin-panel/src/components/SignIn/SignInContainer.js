import React from 'react';

import IconButton from 'material-ui/IconButton';
import AcountIcon from 'material-ui-icons/AccountCircle';

import SignIn from './SignIn';

const useLocalhost = true;
const localhostUrl = 'http://localhost:8000/';
const remoteUrl = 'http://ec2-18-217-215-212.us-east-2.compute.amazonaws.com:8000/';

const apiUrl = useLocalhost ? localhostUrl : remoteUrl;
const servicePath = 'login/';

class SignInContainer extends React.Component {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('apiToken');
        this.state = {
            isWindowOpen: false,
            username: '',
            password: '',
            token
        }
    }
    setToken(token) {
        localStorage.setItem('apiToken', token);
        this.setState({ token })
    }
    signIn() {
        const { username, password } = this.state;
        const data = JSON.stringify(
            { username, password }
        );
        fetch(apiUrl+servicePath, {
            method: 'POST',
            headers: {
                'accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: data
        })
        .then( response => response.json() )
        .then( json => {
            this.setToken(json.token);
            this.setState({ username: '', password: '' }) 
        });
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
                    signIn={this.signIn.bind(this)}
                />
            </React.Fragment>
        );
    }
}
export default SignInContainer;