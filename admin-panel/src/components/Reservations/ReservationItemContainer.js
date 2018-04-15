import React from 'react';

import ReservationItem from './ReservationItem';

const FIELD_NAMES = {
    userId: 'ID_USER',
    tableId: 'ID_TABLE',
    date: 'DATE'
}

class ReservationItemContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { };
    }
    updateField(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
            itemToUpdate: {
                ...this.state.itemToUpdate,
                [FIELD_NAMES[name]]: value
            }
        });
    }
    updateItem() {
        this.props.updateItem(this.state.itemToUpdate)
    }
    render() {
        return (
            <ReservationItem 
                {...this.props}
                {...this.state}
                updateItem={this.updateItem.bind(this)} 
                updateField={this.updateField.bind(this)} 
            />
        );
    }
}

export default ReservationItemContainer;