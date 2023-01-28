import React, { useState, useEffect } from "react";

import socialMedia from "./lib/socialMedial";

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
    "privacy",
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
        <footer className="text-gray-600 dark:text-gray-400/50 w-screen font-inter mb-20 print:hidden">
            <motion.div inital="hidden" whileInView="visible" viewport={{ once: true }}
                className="max-w-4xl exl:max-w-5xl 3xl:max-w-7xl p-5 border-t-2 border-gray-200 dark:border-gray-400/10 max-auto text-sm sm:text-base flex flex-col gap-5"
            >
                <div>
                    {data?.isPlaying ? (
                        <whenPlaying song={data} />
                    ) : (
                        <div className="flex item-center gap-2 flex-row-reverse sm:flex-row justify-between sm:justify-start">
                            <FaSpotify className="w-6 h-6 fill-green-400"/>
                            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3">
                                <div className="font-semibold md:text-lg text-black dark:text-white">
                                    Not Playing
                                </div>
                                <span className="hidden md:inline-flex">-</span>
                                <p className="text-gray-500 text-xs sm:text-sm">Spotify</p>
                            </div>
                        </div>
                    )}
                </div>
                <section className="grid grid-cols-3 gap-10">
                    <div className="flex flex-col gap-4 capitalize">
                        {navigationRoutes.slice(0, 4).map((text, index) => {
                            return (
                                <FooterLink key={index} id={index} route={text} text={text} />
                            );
                        })}
                    </div>

                    <div className="flex flex-col gap-4 capitalize">
                        {navigationRoutes.slice(4, navigationRoutes.length).map((route, index) => {
                            let text = route;
                            if (route === "rss") text = "RSS";
                            return <FooterLink key={index} route={route} text={text} />;
                        })}
                    </div>
                    <div className="flex flex-col gap-4 capitalize">
                        {socialMedia.slice(0,10).map((platform, index)=> {
                            return (
                                
                                <Link key={index} href={platform.url} passHref>
                                    <motion.a 
                                    className="hover:text-black dark:hover:text-white w-fit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href={platform.url}
                                    >
                                      <i className={platform.Icon} ></i> {platform.title}
                                    </motion.a>
                                    </Link>
                            )
                        })}
                    </div>
                </section>
            </motion.div>
        </footer>
    )
}
export default Footer;

