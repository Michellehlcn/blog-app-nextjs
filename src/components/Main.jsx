import React from "react";
import Typical from 'react-typical';

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
    return (
        <div id='home' className="w-full h-screen text-center ">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-wildest text-gray-600">A software Developer/ freelancer based in Sydney. </p>
                    <h1 className="py-4 text-gray-700">
                        {/* <span className="text-[#5651e5]"> */}
                             <Typical
									loop={Infinity}
									steps={[
										">cd Michellehlcn _ ",
										1000,
										]}/>
                    </h1>
                    <p className="py-4 text-gray-600 max-w-[70%] m-auto">Hello, My name's Michelle. I'm currently working on projects domain in Back-end development, Data Analyst. See more about me.</p>
                    
                    <div className=" py-4 px-40 flex items-center justify-center mx-w-[330px] m-auto">
                        <div className="mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                        <div className="mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub />
                        </div>
                        <div className="mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                        <div className="mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaTwitter />
                        </div>
                        <div className="mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Main;