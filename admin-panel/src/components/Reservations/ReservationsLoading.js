import React from 'react';

import { LinearProgress } from 'material-ui/Progress';

const ReservationsLoading = () =>
    <div>
        Ładowanie rezerwacji 
        <LinearProgress 
            variant="query"
            color="secondary"
        />
    </div>

export default ReservationsLoading;