import React from "react";
import Image from "next/image";

const Skills = () => {
    return (
        <div id='skills' className="full bg-slate-50">

                <div className="grid md:grid-cols-8 lg:grid-cols-8 ">
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
    )
}

export default Skills