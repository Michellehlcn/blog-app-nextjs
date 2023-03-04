import { BsGithub } from "react-icons/bs";
import { MdOutlineLink, MdReadMore } from "react-icons/md";
import { BiLinkExternal } from 'react-icons/bi';
import Link from "next/link";
import OgImage from "./OgImage";

export default function Project({ project }) {
    return (

        <div className="card ">
            <OgImage
                src={project.coverURL}
                alt={project.name}
            />

            <div className="flex flex-col justify-start gap-3">
                <a className="font-bold capitalize text-neutral-200">
                    {project.name}
                </a>
                <p className="text-sm text-gray-400 dark:text-neutral-400 truncate-2">
                    {project.description}
                </p>

                <div className="flex items-center gap-1 flex-wrap">
                    {project.tools.map((tool, index) => {
                        return (
                            <span
                                key={`${tool}-${index}`}
                                className="bg-gray-100  text-gray-500 rounded px-2 py-1 text-xs"
                            >
                                {tool}
                            </span>
                        );
                    })}
                </div>

                <div className="mt-auto p-2 w-fit flex items-center gap-4">
                    <Link href={project.githubURL} passHref
                        target="_blank"
                        title="Source Code on Github "
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-black dark:hover:text-white">
                        <BsGithub className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
                    </Link>

                    {project.previewURL && (
                        <Link
                            href={project.previewURL} passHref
                            title="Live Preview"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black dark:hover:text-white"
                        >
                            <span className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" >DEMO</span>

                        </Link>
                    )}
                    {project.readmoreURL && (
                        <Link href={project.readmoreURL} passHref
                            target="_blank"
                            title="Source Code on Github "
                            rel="noopener noreferrer"
                            className="text-gray-500 hover:text-black dark:hover:text-white">
                            <BiLinkExternal className="w-6 h-6 hover:scale-110 active:scale-90 transition-all" />
                        </Link>
                    )}
                </div>
            </div>
        </div>


    )
}