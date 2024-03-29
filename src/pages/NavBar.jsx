
import React, { useState, useEffect } from "react";
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail, AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { SiBlogger } from "react-icons/si";
import { FaLinkedinIn, FaGithub, FaTwitter, FaComments } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

import { DarkModeProvider, useDarkMode } from "../context/DarkMode";

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }

    const { isDarkMode, changeDarkMode } = useDarkMode();
    const popUp = {
        hidden: { scale: 0, opacity: 0 },
        visible: {
            opacity: 1,
            scale: 1,
        },
        transition: {
            type: "spring",
        },
    };

    const [shadow, setShadow] = useState(false);
    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    return (
        <div id="navbar">
            <div className="shadow-xl fixed top-0 z-40 w-full backdrop-blur inline-flex transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10  supports-backdrop-blur:bg-white/95 dark:bg-slate-900/75 h-20 ease-in-out  dark:bg-darkPrimary dark:text-gray-100 text-xl">
                <div className="w-full h-full mx-auto p-2 grid grid-cols-6 items-center px-2 ">
                    <div className="col-start-2 col-span-4 flex justify-center">
                        <Link href="/" ><p className="uppercase cursor-pointer hidden md:flex "> michellehlcn</p></Link>
                        <div>
                            <ul className="hidden md:flex">
                                <Link href='/'>
                                    <li className="ml-10 uppercase hover:text-[#696969] ">Home</li>
                                </Link>
                                <Link href='/About'>
                                    <li className="ml-10 uppercase hover:text-[#696969] ">About</li>
                                </Link>
                                <Link href='/Projects'>
                                    <li className="ml-10  uppercase hover:text-[#696969] ">Portfolios</li>
                                </Link>
                                <Link href='/Blog'>
                                    <li className="ml-10 uppercase hover:text-[#696969] ">Blog</li>
                                </Link>
                                <Link href='/Gallery'>
                                    <li className="ml-10  uppercase hover:text-[#696969]">Art</li>
                                </Link>
                                <Link href='/Contact'>
                                    <li className="ml-10  uppercase hover:text-[#696969] ">Contact</li>
                                </Link>
                                <Link href='https://michellehlcn.wordpress.com' target='_blank'>
                                    <li className="ml-10  uppercase hover:text-[#696969]">Wordpress</li>
                                </Link>
                            </ul>
                        </div>

                    </div>
                    <div onClick={handleNav} className="cursor-pointer md:hidden col-start-6 col-span-1 justify-self-end">
                            <AiOutlineMenu size={25} />
                    </div>
                    <div className="col-start-6 col-span-1 justify-self-end hidden md:flex">
                        {/* DarkMode Container */}
                        <div className="cursor-pointer flex">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={popUp}
                                className="cursor-pointer rounded-full z-30 transition active:scale-75 "
                                title="Toggle Theme"
                                onClick={() => changeDarkMode(!isDarkMode)}
                            >
                                {isDarkMode ? (
                                    <FiMoon className="h-6 w-6 sm:h-7 sm:w-7  select-none transition active:scale-75" />
                                ) : (
                                    <FiSun className="h-6 w-6 sm:h-7 sm:w-7  select-none transition active:scale-75" />
                                )}
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Menu Nav side bar */}
                <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}>
                    <div className={nav
                        ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                        : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
                        <div>
                            <div className="flex w-full items-center justify-between">
                                <Link href="/" ><p className="uppercase cursor-pointer text-[#38bdf8] font-extrabold"> michellehlcn</p></Link>
                                <div onClick={handleNav} className="text-gray-700 rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer">
                                    <AiOutlineClose />
                                </div>
                            </div>
                            <div className="border-b border-gray-300 my-4 ">
                                <p className="w-[85%] md:w-[90%] py-4 text-gray-700"> #BeBrave</p>

                            </div>
                        </div>
                        <div className="py-4 flex flex-col">
                            <ul className="uppercase text-gray-700">
                            <Link href="/">
                                <li onClick={() => setNav(false)} className="py-4 text-sm flex gap-3 items-center"><AiOutlineHome/> <span>Home</span></li>
                                </Link>
                               <Link href="/About">
                                   <li onClick={() => setNav(false)} className="py-4 text-sm flex gap-3 items-center"> <BsPersonBoundingBox /> About</li>
                                </Link>
                               
                                <Link href="/Projects">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm flex gap-3 items-center"><AiOutlineProject/>Portfolios</li>
                                </Link>
                               <Link href="/Blog">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm flex gap-3 items-center"> <SiBlogger />Blog</li>
                                </Link>
                                <Link href="/Gallery">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm flex gap-3 items-center"><AiOutlineProject/>Art</li>
                                </Link>
                                <Link href="/Contact">
                                    <li onClick={() => setNav(false)} className="py-4 text-sm flex gap-3 items-center"><BiPhoneCall/>Contact</li>
                                </Link>
                                <Link href='https://michellehlcn.wordpress.com' target='_blank'>
                                    <li onClick={() => setNav(false)} className="py-4 text-sm flex gap-3 items-center"> <SiBlogger />Wordpress</li>
                                </Link>
                                
                            </ul>
                            <div className="pt-30 text-gray-700">
                                {/* DarkMode Container */}
                                <div className="cursor-pointer flex py-10">
                                    <motion.div
                                        initial="hidden"
                                        animate="visible"
                                        variants={popUp}
                                        className="cursor-pointer rounded-full z-30 transition active:scale-75 flex gap-3"
                                        title="Toggle Theme"
                                        onClick={() => changeDarkMode(!isDarkMode)}
                                    > {`Dark Mode`}
                                        {isDarkMode ? (
                                            <FiMoon className="h-6 w-6 sm:h-7 sm:w-7  select-none transition active:scale-75" />
                                        ) : (
                                            <FiSun className="h-6 w-6 sm:h-7 sm:w-7  select-none transition active:scale-75" />
                                        )}
                                    </motion.div>
                                </div>
                                <p className="uppercase tracking-wildest text-[#38bdf8]">Let's Connect</p>
                                <div className="flex items-center justify-between my-4 w-full sm:w-[80%] text-gray-700">
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaLinkedinIn />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaGithub />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <AiOutlineMail />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <FaTwitter />
                                    </div>
                                    <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsFillPersonLinesFill />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;