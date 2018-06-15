import React from 'react';
import Item from './Item';

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInEditMode: false,
            tableChanges: {
            }
        }
    }
    toggleEditMode() {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        });
    }    
    updateField(type, value) {
        this.setState({
            tableChanges: {
                ...this.state.tableChanges,
                [type]: Number.parseInt(value)
            }
        });
    }
    handleUpdateButtonClick() {
        const item = {
            ...this.props.table,
            ID_TYPE: this.state.ID_TYPE,
            NUM_OF_SEATS: this.state.NUM_OF_SEATS,
        }
        this.props.updateTable(item)
            .then(
                this.setState({ isInEditMode: false })
            )
    }
    render() {
        return (
            <Item 
                {...this.props}
                {...this.state}
                editMode={this.state.isInEditMode}
                toggleEditMode={() => this.toggleEditMode()}
                updateField={this.updateField.bind(this)}
                handleUpdateButtonClick={this.handleUpdateButtonClick.bind(this)}
            />
        );
    }
}

export default ItemContainer;