import React from "react";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const socialMedia = [
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
        title: "github",
        Icon: AiOutlineMail,
        url: "mailto:michellehlcn.au@gmail.com",
    },
    {
        title: "instagram",
        Icon: AiOutlineInstagram,
        url: "/",
    },
    {
        title: "github",
        Icon: BsFillPersonLinesFill,
        url: "/",
    }
];
export default socialMedia;