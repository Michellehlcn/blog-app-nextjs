import React from "react";
import { AnimatePresence } from "framer-motion";
import Project from "components/lib/Project";
import projects from "components/lib/projectData";

export default function Projects() {
    return (
        <><section className="w-full h-screen py-20">
            <div className="max-w-4xl exl:max-w-5xl 3xl:max-w-7xl mx-auto px-2 py-16 w-full">

                <a>Page Title</a>
                <span className="font-bold text-gray-600 dark:text-gray-200">
                    {projects.length}
                </span>{" "}
                projects.


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
        </>
    )
}

// export async function getStaticProps() {
//     const projects = getProjects();
//     return {
//         props: {
//             projects,
//         },
//     };
// }

// function getProjects() {
//     return projects.reverse();
// }

