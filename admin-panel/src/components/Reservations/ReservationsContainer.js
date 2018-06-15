import React, { Component } from 'react';

import Reservations from './Reservations';
import { withAuthContext } from '../../authContext';

import DataProvider from './../../DataProvider';

const handleFiltering = (list, filters) => {
    if (!filters)
        return list;
    let filterableList = list;
    if (filters.id_table)
        filterableList = filterableList.filter(item => item['ID_TABLE'] == filters.id_table)
    if (filters.date)
        filterableList = filterableList.filter(item => item['DATE'] === filters.date);
    return filterableList;
}

class ReservationsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            reservations: [],
            showFilters: false,
            filters: { }
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
    cancelReservationItem(key) {
        const dataProvider = new DataProvider(this.props.auth.token);
        return dataProvider.cancelReservation(key)
            .then( () => this.fetchReservations() );
    }
    toggleFilters() {
        this.setState({
            showFilters: !this.state.showFilters,
            filters: this.state.showFilters ? {} : this.state.filters
        });
    }
    applyFilter(event) {
        const filterName = event.target.name;
        const filterValue = event.target.value;
        this.setState({
            filters: {
                ...this.state.filters,
                [filterName]: filterValue
            }
        })
    } 
    render() {
        const currentDate = (new Date()).setHours(0, 0, 0, 0);
        const comingReservations = this.state.reservations
            .filter(res => new Date(res['DATE']) > currentDate)
        return (
            <Reservations 
                reservations={comingReservations}
                areReservationsLoaded={!!this.state.reservations.length}
                deleteReservationItem={this.deleteReservationItem.bind(this)}
                updateReservationItem={this.updateReservationItem.bind(this)}
                cancelReservationItem={this.cancelReservationItem.bind(this)}
                showFilters={this.state.showFilters}
                toggleFilters={this.toggleFilters.bind(this)}
                applyFilter={this.applyFilter.bind(this)}
            />
        );
    }
}

export default withAuthContext(ReservationsContainer);