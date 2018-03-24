import React, { Component } from 'react';

import Reservations from './Reservations';

class ReservationsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [
                { name: 'Reservation 1', date: 'today', price: 25.99 },
                { name: 'Reservation 2', date: 'today', price: 12.99 },
                { name: 'Reservation 5', date: 'tomorrow', price: 17.99 }
            ]
        };
    }
    componentDidMount() {
        this.fetchReservations();
    }
    fetchReservations() {

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