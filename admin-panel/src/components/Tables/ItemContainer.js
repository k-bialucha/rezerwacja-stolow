import React from 'react';
import Item from './Item';

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInEditMode: false,
            ID_TYPE: props['ID_TYPE'],
            NUM_OF_SEATS: props['NUM_OF_SEATS'],
        }
    }
    toggleEditMode() {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        });
    }    
    updateField(type, value) {
        this.setState({
            [type]: value,
        });
    }
    render() {
        return (
            <Item 
                {...this.props}
                editMode={this.state.isInEditMode}
                toggleEditMode={() => this.toggleEditMode()}
                updateField={this.updateField.bind(this)}
            />
        );
    }
}

export default ItemContainer;