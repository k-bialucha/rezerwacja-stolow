import React, { Component } from 'react';

import Reservations from './Reservations';
import { withAuthContext } from '../../authContext';

import DataProvider from './../../DataProvider';

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
        const dataProvider = new DataProvider(this.props.auth.token);
        return dataProvider.getReservations()
            .then( reservations => this.setState({ reservations }) );
    }
    deleteReservationItem(key) {
        const dataProvider = new DataProvider(this.props.auth.token);
        return dataProvider.deleteReservation(key)
            .then( response => this.fetchReservations() );
    }
    updateReservationItem(key, item) {
        const dataProvider = new DataProvider(this.props.auth.token);
        return dataProvider.updateReservation(key, item)
            .then( () => this.fetchReservations() );
    }
    render() {
        const comingReservations = this.state.reservations
            .filter(res => new Date(res['DATE']) > Date.now());
        return (
            <Reservations 
                reservations={comingReservations}
                areReservationsLoaded={!!this.state.reservations.length}
                deleteReservationItem={this.deleteReservationItem.bind(this)}
                updateReservationItem={this.updateReservationItem.bind(this)}
            />
        );
    }
}

export default withAuthContext(ReservationsContainer);