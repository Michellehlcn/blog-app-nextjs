import React from "react";
import Typical from 'react-typical';

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Main = () => {
    return (
        <div 
        id='home' 
        className="w-full h-screen text-center " 
        ref={node => {
            if (node) console.log("Home Page", node)
            //Do something with node
          }}>
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    <p className="uppercase text-sm tracking-wildest text-gray-600 pb-3">A software Developer/ freelancer based in Sydney. </p>
                    <a className="py-3 text-7xl ">
                        <span className="text-[#38bdf8]"> 
                             <Typical
									loop={Infinity}
									steps={[
										">cd Michellehlcn _ ",
										1000,
										]}/>
                        </span>
                    </a>
                    <p className="py-5 pb-10 text-gray-600 max-w-[70%] mx-auto font-thin">
                        Hello, My name's Michelle. I'm currently working on projects domain in Back-end development, Data Analyst.
                    </p>
                    <a className="border-slate-50 border-2 rounded-lg py-3 p-3 ring-2 cursor-pointer mx-auto text-[#83a2b4] hover:text-[#38bdf8]
                        ">See more about me.</a>
                    
                    <div className=" py-10 px-40 flex items-center justify-center mx-w-[330px] m-auto">
                        <div className="mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#38bdf8] hover:shadow-[#38bdf8]">
                            <FaLinkedinIn />
                        </div>
                        <div className="mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#38bdf8 hover:shadow-[#38bdf8]">
                            <FaGithub />
                        </div>
                        <div className="mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#38bdf8] hover:shadow-[#38bdf8]">
                            <AiOutlineMail />
                        </div>
                        <div className="mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#38bdf8] hover:shadow-[#38bdf8]">
                            <FaTwitter />
                        </div>
                        <div className="mx-2 rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300 hover:text-[#38bdf8] hover:shadow-[#38bdf8]">
                            <BsFillPersonLinesFill />
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Main;