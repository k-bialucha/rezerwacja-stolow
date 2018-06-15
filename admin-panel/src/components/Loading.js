import React from 'react';

import { LinearProgress } from 'material-ui/Progress';

const Loading = ({ text }) =>
    <div>
        {text}
        <LinearProgress 
            variant="query"
            color="secondary"
        />
    </div>
;

export default Loading;