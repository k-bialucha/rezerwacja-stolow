import React, { Component } from 'react';

import Reservations from './Reservations';

const useLocalhost = true;
const localhostUrl = 'http://localhost:8000/';
const remoteUrl = 'http://ec2-18-217-215-212.us-east-2.compute.amazonaws.com:8000/';

const apiUrl = useLocalhost ? localhostUrl : remoteUrl;
const servicePath = 'testsite/api2';

class ReservationsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: []
        };
    }
    componentDidMount() {
        this.fetchReservations();
    }
    fetchReservations() {
        fetch(apiUrl+servicePath, {
            headers: {
                'accept': 'application/json'
            }
        })
        .then( response => response.json() )
        .then( json => this.setState({ reservations: json }) );
    }
    deleteReservationItem(key) {
        const url = apiUrl + servicePath + '/' + key;
        fetch(url, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json'
            }
        })
        .then( () => this.fetchReservations() );
    }
    render() {
        return (
            <Reservations 
                reservations={this.state.reservations}
                deleteReservationItem={this.deleteReservationItem.bind(this)}
            />
        );
    }
}

export default ReservationsContainer;