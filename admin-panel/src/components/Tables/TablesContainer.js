import React from 'react';

import Tables from './Tables';

const useLocalhost = true;
const localhostUrl = 'http://localhost:8000/';
const remoteUrl = 'http://ec2-18-217-215-212.us-east-2.compute.amazonaws.com:8000/';

const apiUrl = useLocalhost ? localhostUrl : remoteUrl;
const servicePath = 'testsite/api4';

class TablesContainer extends React.PureComponent {
    fetchTables() {
        fetch(apiUrl+servicePath, {
            headers: {
                'accept': 'application/json'
            }
        })
        .then( response => response.json() )
        .then( json => this.setState({ tables: json }) );
    }
    render() {
        return <Tables />
    }
}

export default TablesContainer;