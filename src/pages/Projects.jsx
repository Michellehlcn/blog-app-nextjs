import React from "react";
import { AnimatePresence } from "framer-motion";
import Project from "components/lib/Project";
import projects from "components/lib/projectData";

export default function Projects() {
    return (
        <>
            <div className="mt-[44px] md:mt-[60px] max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl relative mx-auto p-4 mb-10 text-neutral-900 dark:text-neutral-200;">
                <section className="w-full flex flex-col gap-3 py-5 select-none mb-10  ">
                    <h1 className="text-[#38bdf8]">Portfolios</h1>
                    <span className="font-bold text-gray-600 dark:text-gray-200">
                        Web/Application Development, Commercial Software, Webscraping, Data Visualization, Map and Navigatio,  Miscellaneous Packages
                        <p className="italic ">A glimpse of {projects.length} projects I've been working on.</p>
                    </span>
                    <div className="grid grid-cols-1 gap-4 md:ml-[20%] xl:ml-[24%]" style={{ opacity: 1 }}>

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
