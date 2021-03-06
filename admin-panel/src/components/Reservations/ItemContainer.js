import React from 'react';

import Item from './Item';

const FIELD_NAMES = {
    userId: 'ID_USER',
    tableId: 'ID_TABLE',
    date: 'DATE',
    startHour: 'HOUR_FROM',
    endHour: 'HOUR_TO'
}

class ItemContainer extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { 
            isItemLoading: false
        };
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
        this.setState({isItemLoading: true})
        this.props.updateItem(this.state.itemToUpdate)
        .then(() => this.setState({ isItemLoading: false }))
    }
    confirmItem() {
        this.setState({isItemLoading: true})
        this.props.updateItem({'CONFIRMED': true})
        .then(() => this.setState({ isItemLoading: false }))
    }
    deleteItem() {
        this.setState({isItemLoading: true})
        this.props.deleteItem()
        .then(() => this.setState({ isItemLoading: false }))
    }
    cancelItem() {
        this.setState({isItemLoading: true})
        this.props.cancelItem()
        .then(() => this.setState({ isItemLoading: false }))
    }
    render() {
        return (
            <Item 
                {...this.props}
                {...this.state}
                updateItem={this.updateItem.bind(this)} 
                confirmItem={this.confirmItem.bind(this)} 
                updateField={this.updateField.bind(this)} 
                deleteItem={this.deleteItem.bind(this)} 
                cancelItem={this.cancelItem.bind(this)} 
            />
        );
    }
}

export default ItemContainer;