import React from "react";
import { AnimatePresence } from "framer-motion";
import Project from "components/lib/Project";
import projects from "components/lib/projectData";

import { AiOutlineProject } from 'react-icons/ai';

export default function Projects() {
    return (
        <>
            <div className="mt-[44px] md:mt-[60px] max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl relative mx-auto p-4 mb-10 text-neutral-900 dark:text-neutral-200;">
                <section className="w-full flex flex-col gap-3 py-5 select-none mb-10  ">
                    <h1 className="text-[#38bdf8] flex gap-5"> <AiOutlineProject/>Portfolios</h1>
                    <span className="font-bold text-gray-600 dark:text-gray-500">
                        Web/Application Development, Commercial Software, Quantiative Trading Bot, Webscraping, Data Visualization, Map and Navigatio,  Miscellaneous Packages
                        <p className="italic ">A glimpse of projects I've been working on.</p>
                    </span>
                    <div className="grid md:grid-cols-2 gap-5 grid-cols-1" style={{ opacity: 1 }}>

                        <AnimatePresence>
                            {projects &&
                                projects.map((project, index) => {
                                    if (project.name === "" && project.githubURL === "")
                                        return null;
                                    return <Project key={index} project={project} />;
                                })}
                        </AnimatePresence>
                    </div>
                </section>
            </div>
        </>
    )
}

