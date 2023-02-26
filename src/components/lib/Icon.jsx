import React from 'react';

import gitHub from './icons/github';
import instagram from './icons/instagram';
import linkedin from './icons/linkedin';
import twitter from './icons/twitter';
import folder from './icons/folder';
import profile from './icons/profile';
import facebook from './icons/facebook';
import mail from './icons/mail';
import youtube from './icons/youtube';
import discord from './icons/discord';
import spotify from './icons/spotify';

const iconTypes = {
    github: gitHub,
    instagram: instagram,
    linkedin: linkedin,
    twitter: twitter,
    folder: folder,
    profile: profile,
    facebook: facebook,
    mail: mail,
    youtube: youtube,
    discord: discord,
    spotify: spotify,
};
const size = 8;
const IconComponent = ({ name, ...props}) => {
    let Icon = iconTypes[name];
    return <Icon {...props} />
};

export default IconComponent;