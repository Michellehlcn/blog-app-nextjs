import React from 'react';

import gitHub from './icons/github';
import instagram from './icons/instagram';
import linkedin from './icons/linkedin';
import twitter from './icons/twitter';
import folder from './icons/folder';

const iconTypes = {
    github: gitHub,
    instagram: instagram,
    linkedin: linkedin,
    twitter: twitter,
    folder: folder,
};

const IconComponent = ({ name, ...props}) => {
    let Icon = iconTypes[name];
    return <Icon {...props} />
};

export default IconComponent;