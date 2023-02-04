import React from "react";
import Image from "next/image";

const Skills = () => {
    return (
        <div id='skills' className="py-20 mt-[44px] md:mt-[60px] max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl relative mx-auto p-4 mb-10 ">
        <div className="px-2 max-w-4xl exl:max-w-5xl 3xl:max-w-7xl flex flex-col h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]"> Skills</p>
                <h2 className="py-4">What I can do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 ">
                    <div className="p-6 hover:scale-105 ease-in duration-300">
                        <div className="rounded-xl shadow-lg shadow-gray-400 p-2  grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/aws.png" width="64" height="64" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>AWS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 hover:scale-105 ease-in duration-300">
                        <div className="rounded-xl shadow-lg shadow-gray-400 p-2  grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto  ">
                                <Image src="/assets/skills/node.png" width="64" height="64" alt="/"/>
                            </div>
                            <div className=" flex flex-col items-center justify-center">
                                <h3>NODEJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6  hover:scale-105 ease-in duration-300">
                        <div className="rounded-xl shadow-lg shadow-gray-400 p-2  grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/javascript.png" width="64" height="64" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6  hover:scale-105 ease-in duration-300">
                        <div className="rounded-xl shadow-lg shadow-gray-400 p-2  grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/react.png" width="64" height="64" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>REACT</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6  hover:scale-105 ease-in duration-300">
                        <div className="rounded-xl shadow-lg shadow-gray-400 p-2  grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/nextjs.png" width="64" height="64" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>NEXTJS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6  hover:scale-105 ease-in duration-300">
                        <div className="rounded-xl shadow-lg shadow-gray-400 p-2  grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/tailwind.png" width="64" height="64" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TAILWIND</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6  hover:scale-105 ease-in duration-300">
                        <div className="rounded-xl shadow-lg shadow-gray-400 p-2  grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image src="/assets/skills/github1.png" width="64" height="64" alt="/"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>GITHUB</h3>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    )
}

export default Skills