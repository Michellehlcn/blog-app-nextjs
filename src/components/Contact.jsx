import React from "react";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

const Contact = () => {
    return (
        <div  id ="contact" className="w-screen ">
            <div className="max-w-4xl exl:max-w-5xl 3xl:max-w-7xl m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
                <h2 className="py-4">Get in touch</h2>
                <div className="grid lg:grid-cols-5 gap-8">
                    {/* Left */}
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-4 h-full justify-self-center">
                            <div>
                                <img className="rounded-xl hover:scale-105 ease-in duration-300" src="" />
                            </div>

                            <div>
                                <h2 className="py-2">Michellehlcn</h2>
                                <p>Sofware Developer/ Freelancer</p>
                                <p className="py-4">I am available for hire and open to any ideas of cooperation. Contact me and let's talk.</p>
                            </div>

                            <p className="uppercase pt-8">Connect With Me</p>
                            <div className="flex justify-center py-4 items-center ">
                                <div className="ml-2 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn />
                                </div>
                                <div className="ml-2 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub />
                                </div>
                                <div className="ml-2  rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail />
                                </div>
                                <div className="ml-2  rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaTwitter />
                                </div>
                                <div className="ml-2 rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <BsFillPersonLinesFill />
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* right */}

                    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-2">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Name</label>
                                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">Phone Number</label>
                                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                    </div>
                                </div>

                                <div className="flex flex-col py-2">
                                    <label className="uppercase text-sm py-2">Email</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />
                                </div>
                                <div className="flex flex-col py-2">

                                    <label className="uppercase text-sm py-2">Subject</label>
                                    <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                </div>
                                <div className="flex flex-col py-2">

                                    <label className="uppercase text-sm py-2">Message</label>
                                    <textarea className="border-2 rounded-lg p-3 flex border-gray-300" rows='5' type="text" />
                                </div>
                                <button className="w-full p-4 text-gray-100 mt-4">Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={30} />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Contact;