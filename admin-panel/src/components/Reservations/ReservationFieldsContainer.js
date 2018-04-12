import React from 'react';

import ReservationFields from './ReservationFields';

class ReservationFieldsContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: props.userId,
            tableId: props.tableId,
            date: props.date
        }
    }
    updateField(event) {
        const fieldName = event.target.name;
        const value = event.target.value;
        this.setState({
            [fieldName]: value
        });
    }
    render() {
        return <ReservationFields {...this.state} updateField={this.updateField.bind(this)}/>;
    }
};

export default ReservationFieldsContainer;