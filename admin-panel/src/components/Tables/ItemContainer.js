import React from 'react';
import Item from './Item';

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInEditMode: false,
            isItemUpdating: false,
            tableChanges: { }
        }
    }
    toggleEditMode() {
        this.setState({
            isInEditMode: !this.state.isInEditMode,
            ...this.state.isInEditMode ? { tableChanges: { } } : { }
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
            ...this.state.tableChanges
        }
        this.setState({ isItemUpdating: true });
        this.props.updateTable(item)
            .then(
                () => this.setState({ isInEditMode: false, isItemUpdating: false })
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
                showLoading={this.state.isItemUpdating}
            />
        );
    }
}

export default ItemContainer;