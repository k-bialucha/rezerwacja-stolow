import React from 'react';

const Context = React.createContext();

const useLocalhost = true;
const localhostUrl = 'http://localhost:8000/';
const remoteUrl = 'http://ec2-18-217-215-212.us-east-2.compute.amazonaws.com:8000/';

const apiUrl = useLocalhost ? localhostUrl : remoteUrl;
const servicePath = 'login/';

class AuthProvider extends React.PureComponent {
    constructor(props) {
        super(props);
        const token = localStorage.getItem('apiToken');
        this.state = {
            token
        }
    }
    setToken(token) {
        localStorage.setItem('apiToken', token);
        this.setState({ token })
    }
    signIn(username, password) {
        const data = JSON.stringify(
            { username, password }
        );
        return fetch(apiUrl+servicePath, {
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
            return json.token;
        });
    }
    render() {
        return (
            <Context.Provider
                value={{
                    token: this.state.token,
                    signIn: this.signIn.bind(this)
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

const withAuthContext = WrappedComponent => 
      props =>
        <Context.Consumer>
            {auth =>
                <WrappedComponent {...props} auth={auth} />
            }
        </Context.Consumer>
;

export {
    AuthProvider,
    withAuthContext
}