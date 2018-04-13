import React from 'react';

import ReservationItem from './ReservationItem';

class ReservationItemContainer extends React.Component {
    render() {
        return <ReservationItem {...this.props} />
    }
}

export default ReservationItemContainer;