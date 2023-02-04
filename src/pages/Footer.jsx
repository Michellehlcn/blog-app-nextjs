import React, { useState, useEffect } from "react";

import socialMedia from "../components/lib/socialMedial";

import { FaSpotify } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const navigationRoutes = [
    "home",
    "about",
    "skills",
    "portfolios",
    "blogs",
    "certificates",
    "testimonials",
    "contact",
    "rss",
];
function whenPlaying({ song }) {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Now Playing</h4>
            <Link href={somg.songUrl} passJref>
                <a href={song.songUrl} className="flex items-center justify-between bg-gray-200 dark:bg-darkSecondary p-3 sm:p-4 rounded-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10">
                            <Image
                                alt={song.title}
                                src={song.albumImageUrl}
                                width={40}
                                height={40}
                                layout="fixed"
                                quality={50}
                                placeholder="blur"
                                blurDataURL={song.albumImageUrl}
                            />
                        </div>
                        <div className="flex flex-col sm:flex-col sm:items-center sm:gap-3">
                            <h3 className="font-semibold md:text-lg text-black dark:text-white animate">
                                {song.title}
                            </h3>
                            <span className="hidden md:inline-flex">-</span>
                            <p className="text-gray-600 text-sx sm:text-sm">{song.artist}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaSpotify className="w-6 h-6 text-green-500 animate-[spin_2s_linear_infinite]" />
                    </div>
                </a>
            </Link>
        </div>
    )
}
function FooterLink({ route, text }) {
    return (
        <Link href={`/${route}`} passHref>
            <motion.a
                className="hover:text-black dark:hover:text-white w-fit"
                href={`/${route}`}
            > {text}
            </motion.a>
        </Link>
    )
}
const Footer = () => {
    //const { data, error } = useSWR(, fetcher);
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        fetch('/api/now-playing')
            .then((res) => res.json())
            .then((data) => {

                setData(data)
                setLoading(false)
            })
    }, [])


    if (!data) return <div>Loading ...</div>
    return (
        <>
            <footer className="text-gray-600  grid grid-cols-6  w-screen font-inter print:hidden bg-cover bg-white">

                <motion.div inital="hidden" whileInView="visible" viewport={{ once: true }}
                    className=" max-w-4xl exl:max-w-5xl 3xl:max-w-7xl p-5  max-auto  sm:text-base flex flex-col justify-self-center col-start-2 col-span-4 w-full gap-5"
                >

                    <div>
                        {data?.isPlaying ? (
                            <whenPlaying song={data} />
                        ) : (
                            <div className="flex item-center gap-2 flex-row-reverse sm:flex-row justify-between sm:justify-start">
                                <FaSpotify className="w-6 h-6 fill-green-400" />
                                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                                    <div>
                                        Not Playing
                                    </div>
                                    <span className="hidden md:inline-flex">-</span>
                                    <p className="text-gray-500 text-xs sm:text-sm">Spotify</p>
                                </div>
                            </div>
                        )}


                    </div>
                    <section className="grid grid-cols-3 gap-10 text-sm border-t border-double border-slate-200 dark:border-gray-400/10 p-5 ">
                        <div className="flex flex-col gap-4 capitalize">
                            {navigationRoutes.slice(0, 4).map((text, index) => {
                                return (
                                    <FooterLink key={index} id={index} route={text} text={text} className="hover:text-black"/>
                                );
                            })}
                        </div>

                        <div className="flex flex-col gap-4 capitalize">
                            {navigationRoutes.slice(4, navigationRoutes.length).map((route, index) => {
                                let text = route;
                                if (route === "rss")
                                    text = "RSS";
                                return <FooterLink key={index} route={route} text={text} className="hover:text-black"/>;
                            })}
                        </div>
                        <div className="flex flex-col gap-4 capitalize">
                            {socialMedia.slice(0, 10).map((platform, index) => {
                                return (

                                    <Link key={index} href={platform.url} passHref>
                                        <motion.a
                                            className="hover:text-black dark:hover:text-white w-fit"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={platform.url}
                                        >
                                            <i className={platform.Icon}></i> {platform.title}
                                        </motion.a>
                                    </Link>
                                );
                            })}
                        </div>
                    </section>

                    <div class="py-10 mb-6 sm:mb-0 sm:flex text-sm justify-between">
                        <div className="flex">
                        <p>Copyright © 2023 Michellehlcn. All rights reserved.</p>
                        <p class="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
                            <a class="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Privacy Policy</a>
                        </p>
                        </div>
                        <a class="sm:ml-4 sm:pl-4 cursor-pointer  hover:text-slate-900 dark:hover:text-slate-400" href="">Sydney, Australia.</a>
                    </div>
                </motion.div>
            </footer></>
    )
}
export default Footer;
