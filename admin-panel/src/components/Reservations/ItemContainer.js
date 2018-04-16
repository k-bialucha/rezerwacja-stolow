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
        this.props.updateItem(this.state.itemToUpdate)
    }
    render() {
        return (
            <Item 
                {...this.props}
                {...this.state}
                updateItem={this.updateItem.bind(this)} 
                updateField={this.updateField.bind(this)} 
            />
        );
    }
}

export default ItemContainer;