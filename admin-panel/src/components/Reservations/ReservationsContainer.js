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
        return fetch(url, {
            method: 'DELETE',
            headers: {
                'accept': 'application/json'
            }
        })
        .then( () => this.fetchReservations() );
    }
    updateReservationItem(key, item) {
        const url = apiUrl + servicePath + '/' + key + '/';
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(item),
            headers: {
                'accept': 'application/json'
            }
        })
        .then( () => this.fetchReservations() );
    }
    render() {
        const comingReservations = this.state.reservations
            .filter(res => new Date(res['DATE']) > Date.now());
        const awaitingReservations = comingReservations
            .filter(res => !res['CONFIRMED']);
        const confirmedReservations = comingReservations
            .filter(res => res['CONFIRMED']);
        return (
            <Reservations 
                reservations={this.state.reservations}
                confirmedReservations={confirmedReservations}
                awaitingReservations={awaitingReservations}
                deleteReservationItem={this.deleteReservationItem.bind(this)}
                updateReservationItem={this.updateReservationItem.bind(this)}
            />
        );
    }
}

export default ReservationsContainer;