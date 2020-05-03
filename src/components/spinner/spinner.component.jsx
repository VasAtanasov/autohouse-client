import React from 'react';

import { LoadingScreen } from './spinner.styles';

const Spinner = () => (
    <LoadingScreen>
        <div className="loading-image-container">
            <div className="loading-image"></div>
        </div>
    </LoadingScreen>
);

export default Spinner;
