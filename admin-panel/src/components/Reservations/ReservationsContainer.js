import React, { Component } from 'react';

import Reservations from './Reservations';

const apiUrl = 'http://ec2-18-217-215-212.us-east-2.compute.amazonaws.com:8000/';
const servicePath = 'testsite/api2';

class ReservationsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [
                    {
                        "ID_RES": 20,
                        "ID_USER": 2,
                        "ID_TABLE": 1,
                        "DATE": "2018-03-25",
                        "HOUR_FROM": 5,
                        "HOUR_TO": 6,
                        "CHARGE": 35,
                        "CONFIRMED": false
                    },
                    {
                        "ID_RES": 19,
                        "ID_USER": 1,
                        "ID_TABLE": 1,
                        "DATE": "2018-03-22",
                        "HOUR_FROM": 1,
                        "HOUR_TO": 2,
                        "CHARGE": 14,
                        "CONFIRMED": false
                    }
            ]
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
        .then( response => {
            console.log('Response:', response);
            return response.json()
        } )
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
            />
        );
    }
}

export default ReservationsContainer;