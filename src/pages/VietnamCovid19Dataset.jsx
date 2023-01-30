import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import { AiFillCheckCircle } from "react-icons/ai";
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Img from "../../public/assets/portfolios/3.png";

const VietnamCovid19Dataset = () => {
    return (
        <div className="w-full">
            <div className="w-screen h-[50vh] relative">
                <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10">
                    <Image className="absolute z-1" layout='fill' objectFit="cover" src={Img} alt='/'></Image>
                </div>
                <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
                    <h2 className="py-2">VietnamCovid19 Dataset</h2>
                    <h3>Python / Javascript / Chartjs</h3>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-10">
                <div className="col-span-5 mb-7">
                    <p>Project</p>
                    <h2>Overview</h2>
                    <p>A website made to track Covid-19 cases and Vaccine Rollout.</p>

                    {/* Button */}
                    <a href="https://michellehlcn.github.io/VietnamCovid19Dataset/" target="_blank" rel="noreferer"><button className="px-8 py-2 mt-4 mr-8">Code</button></a>
                    <a href="/" target="_blank" rel="noreferer"><button className="px-8 py-2 mt-4">Demo</button></a>

                </div>

                {/* Technologies */}
                <div className="col-span-4 md:col-span-4 shadow-xl grounded-xl py-4">
                    <div className="p-2">
                        <p className="text-center font-bold pb-2">Technologies</p>
                        <div className="grid grid-cols-3 md:grid-cols-3">
                            <p className="text-gray-600 py-2 flex items-center col-span-1">
                                <AiFillCheckCircle className="pr-1" />Python
                            </p>
                            <p className="text-gray-600 py-2 flex items-center col-span-1">
                                <AiFillCheckCircle className="pr-1" />Javascript
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <AiFillCheckCircle className="pr-1" />Google API
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <AiFillCheckCircle className="pr-1" />Chartjs
                            </p>
                            <p className="text-gray-600 py-2 flex items-center">
                                <AiFillCheckCircle className="pr-1" />Data Studio
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <div className="max-w-[1240px] mx-auto p-2 gap-8 py-8">
                <div>
                    {/* Description */}
                    <br />
                    <div className="py-8" >
                        <h2>Description</h2>
                        <hr />
                        <p>With all my free time in lockdown, I’ve created website to collate Covid-19 data relevant to Vietnam. You can view it in this link above. This is a beta version which replaces the past tracking projects <code>Covid hotspot</code> and <code>data Studio version</code>. More features will be added in the future.Highlight features such as Dashboard, Timeline Chart of covidcases in 63 states/cities. The webpage also includes additional vaccine tracking on each state and vaccine sources in details.</p>
                        <p className="py-8">Disclaimer: All data had been fetched from the official Vietnam health ministry website and extracted by me. The project is not affiliated with any association rather than for the main purpose – to help and provide more information about Cases, vaccine rollout trend, which myself thinking there has been inadequate and lack of transparency. The date which information was last updated is noted with the relevant indicators and graphs.</p>

                        <p >The data was retrieved using <code>Python</code>. It requires several
                            <code>HTML widgets, Javascripts</code> to create interactive graphs, and specific packages to interact with the database. Here is a screenshoot of the page:</p>
                        <center><img src="https://Michellehlcn.github.io/Homepage/image3.ipeg.png" width="80%"></img></center>
                        <center><img src="https://Michellehlcn.github.io/Homepage/images/cv1.png" width="80%"></img></center>
                        <center><img src="https://Michellehlcn.github.io/Homepage/images/cv2.png" width="80%"></img></center>

                        <center><img src="https://Michellehlcn.github.io/Homepage/images/cv4.png" width="80%"></img></center>

                        <br />
                        <h6>Read more</h6>
                        <hr />
                        <span>See the associated <a href="https://github.com/Michellehlcn/VietnamCovid19Dataset" target="_blank">github repository</a> for more information and source code of the project</span>
                        <br />
                    </div>
                </div>
                <Link href="/#portfolio">
                    <p className="underline cursor-pointer">Back</p>
                </Link>
                <div className="flex justify-center py-1">
                    <Link href="">
                        <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                            <HiOutlineChevronDoubleUp size={30} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default VietnamCovid19Dataset;