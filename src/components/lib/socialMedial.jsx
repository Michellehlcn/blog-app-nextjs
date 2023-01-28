import React from "react";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const socialMedia = [
    {
        title: "Twitter",
        Icon: FaTwitter,
        url: "",
    },
    {
        title: "Github",
        Icon: FaGithub,
        url: "",
    },
    {
        title: "LinkedIn",
        Icon: FaLinkedinIn,
        url: "",
    },
    {
        title: "Mail",
        Icon: AiOutlineMail,
        url: "mailto:michellehlcn.au@gmail.com",
    },
    {
        title: "Instagram",
        Icon: AiOutlineInstagram,
        url: "",
    },
    {
        title: "Contact",
        Icon: BsFillPersonLinesFill,
        url: "",
    }
];
export default socialMedia;