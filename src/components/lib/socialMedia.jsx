import React from "react";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const socialMedia = [
    {
        title: "discord",
        Icon: BsFillPersonLinesFill,
        url: "/",
    },
    {
        title: "twitter",
        Icon: FaTwitter,
        url: "/",
    },
    {
        title: "github",
        Icon: FaGithub,
        url: "/",
    },
    {
        title: "linkedin",
        Icon: FaLinkedinIn,
        url: "/",
    },
    {
        title: "mail",
        Icon: AiOutlineMail,
        url: "mailto:michellehlcn.au@gmail.com",
    },
    {
        title: "instagram",
        Icon: AiOutlineInstagram,
        url: "/",
    },
    {
        title: "youtube",
        Icon: BsFillPersonLinesFill,
        url: "/",
    },
    {
        title: "facebook",
        Icon: BsFillPersonLinesFill,
        url: "/",
    },
    {
        title: "spotify",
        Icon: BsFillPersonLinesFill,
        url: "/",
    }
];
export default socialMedia;