import React from 'react';

import chevronleftsolid from './arrows/chevron-left-solid.js';
import chevronrightsolid from './arrows/chevron-right-solid.js';
import circlesolid from './arrows/circle-solid.js';

const ArrowTypes = {
    ArrowLeft: chevronleftsolid,
    ArrowRight: chevronrightsolid,
    Circle: circlesolid,
};

const Arrow = ({ name, ...props}) => {
    let Icon = ArrowTypes[name];
    return <Icon {...props} />
};

export default Arrow;