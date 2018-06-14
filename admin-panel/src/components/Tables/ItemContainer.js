import React from 'react';
import Item from './Item';

class ItemContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInEditMode: false
        }
    }
    toggleEditMode() {
        this.setState({
            isInEditMode: !this.state.isInEditMode
        });
    }
    render() {
        return (
            <Item 
                {...this.props}
                editMode={this.state.isInEditMode}
                toggleEditMode={() => this.toggleEditMode()}
            />
        );
    }
}

export default ItemContainer;