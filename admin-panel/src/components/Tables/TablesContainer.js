import React from 'react';

import Tables from './Tables';

const useLocalhost = true;
const localhostUrl = 'http://localhost:8000/';
const remoteUrl = 'http://ec2-18-217-215-212.us-east-2.compute.amazonaws.com:8000/';

const apiUrl = useLocalhost ? localhostUrl : remoteUrl;
const servicePath = 'testsite/api4/';

class TablesContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            tables: []
        }
    }
    componentDidMount() {
        this.fetchTables();
    }
    fetchTables() {
        return fetch(apiUrl+servicePath, {
            headers: {
                'accept': 'application/json'
            }
        })
        .then( response => response.json() )
        .then( json => this.setState({ tables: json }) );
    }
    updateTableItem(item) {
        return fetch(apiUrl+servicePath, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(item)
        })
        .then( () => this.fetchTables() );
    }
    render() {
        return (
            <Tables 
                tables={this.state.tables}
                areTablesLoaded={!!this.state.tables.length}
                updateTable={this.updateTableItem.bind(this)}
            />
        );
    }
}

export default TablesContainer;