import React from "react";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
    return (
        <div id="contact" className="w-full h-screen py-20">
            <div className="max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl m-auto px-2 py-16 w-full">
            <h1 className="text-[#38bdf8] tracking-wide mb-5">Contact</h1>
           
            <div className="grid lg:grid-cols-5 gap-8 pt-10">
                    {/* Left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full bg-[#112240] p-8">
                        <div className="lg:p-4 h-full justify-self-center">
                            <div>
                                <img className="rounded-xl hover:scale-105 ease-in duration-300" src="" />
                            </div>

                            <div>
                                <h2 className="py-2">Michellehlcn</h2>
                                <p>Sofware Developer/ Freelancer</p>
                                <p className="py-10">I am available for hire and open to any ideas of cooperation. Contact me and let's talk.</p>
                            </div>

                            <p className="uppercase py-5">Connect With Me</p>
                            <div className="flex justify-center py-4 items-center ">
                                <div className="ml-2 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300 hover:text-[#38bdf8]">
                                    <FaLinkedinIn />
                                </div>
                                <div className="ml-2 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300 hover:text-[#38bdf8]">
                                    <FaGithub />
                                </div>
                                <div className="ml-2  rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300 hover:text-[#38bdf8]">
                                    <AiOutlineMail />
                                </div>
                                <div className="ml-2  rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300 hover:text-[#38bdf8]">
                                    <FaTwitter />
                                </div>
                                <div className="ml-2 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-150 ease-in duration-300 hover:text-[#38bdf8]">
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* right */}

                    <div className="col-span-3 w-full h-auto bg-[#112240] lg:p-2">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input className="border-2  p-3 flex border-gray-300" type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Phone Number</label>
                                        <input className="border-2  p-3 flex border-gray-300" type="text" />
                                    </div>
                                </div>

                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input className="border-2  p-3 flex border-gray-300" type="email" />
                                </div>
                                <div className="flex flex-col py-2">

                                    <label className="uppercase text-sm py-2">Subject</label>
                                    <input className="border-2  p-3 flex border-gray-300" type="text" />
                                </div>
                                <div className="flex flex-col py-2">

                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea className="border-2  p-3 flex border-gray-300" rows='5' type="text" />
                                </div>
                                <div className="text-center p-3 pt-5">
                                <a className="w-full p-4 mt-4 border-slate-50 border-1 ring-1 rounded-lg py-3 cursor-pointer mx-auto text-[#83a2b4] hover:text-[#38bdf8]
                                " >Send Message</a>
                                </div>
                                {/* <button className="w-full p-4 text-gray-100 mt-4">Send Message</button> */}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;