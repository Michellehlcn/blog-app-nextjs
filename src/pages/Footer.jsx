import React, { useState, useEffect } from "react";

import socialMedia from "../components/lib/socialMedia";

import { FaSpotify } from "react-icons/fa";
import Link from "next/link";
import Image from 'next/image';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { GoLocation } from 'react-icons/go';

import IconComponent from "../components/lib/Icon";

const navigationRoutes = [
    "Home",
    "About",
    "Projects",
    "Blog",
    "Contact",
    "Abstract"

];
const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
  li {
    display: flex;

    a {
      padding: 7px;
      &:hover,
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;
function WhenPlaying({ song }) {
    return (
        <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold">Now Playing</h4>
            <Link href={song.songUrl} passJref className="flex items-center justify-between bg-gray-200 dark:bg-darkSecondary p-3 sm:p-4 rounded-sm">
                    <div className="flex items-center gap-2">
                        <div className="w-30 h-30">
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
                            
                            <p className="text-gray-600 text-sx sm:text-sm">{song.artist}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <FaSpotify className="w-6 h-6 text-green-500 animate-[spin_2s_linear_infinite]" />
                    </div>
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
async function handler(req, res, next) {
    const response = await fetch ("https://google.com", {
        method: "GET",
        headers: {
            accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
    });
    console.log("[Ping]",response.status)
    // if (response.status) {
    //     return res.status(200);
    // };
};
const Footer = () => {
    //const { data, error } = useSWR(, fetcher);
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)
  
    //setInterval(() => {handler()}, 300000)
    setInterval(() => {    
        fetch('https://ginger-tiny-fine.glitch.me')
            .then((res) => console.log(res.status))}, 30000)
    useEffect(() => {
        setLoading(true)
        fetch('/api/now-playing')
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);

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
                            <WhenPlaying song={data} />
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
                    <section className="grid md:grid-cols-3  gap-10 text-sm border-t border-double border-slate-200 dark:border-gray-400/10 p-5 ">
                        <div className="flex flex-col gap-4 capitalize">
                            <a className="pb-2 text-[#38bdf8]">FEATURES</a>
                            {navigationRoutes.slice(0, 6).map((text, index) => {
                                return (     
                                    <FooterLink key={index} id={index} route={text} text={text} className="hover:text-black" />

                                );
                            })}
                        </div>

                        <div className="flex flex-col gap-4 capitalize">
                        <a className="pb-2 text-[#38bdf8]">BLOGS</a>
                        <FooterLink key={0} route={"blog/Facebook-messenger-bot"} text={'facebook-messenger-app'} className="hover:text-black"/>
                        <FooterLink key={0} route={"blog/Crypto-arbitrage-preliminary-analysis"} text={'crypto-arbitrage-preliminary-analysis'} className="hover:text-black"/>
                        </div>
                        
                        <div className="flex flex-col gap-4 capitalize">                
                          <StyledSocialList>
                          <a className="pb-5 text-[#38bdf8]">SOCIAL MEDIA</a>
                            {socialMedia && socialMedia.slice(0, 10).map((platform, index) => {
                                return (
                                    <Link key={index} href={platform.url} passHref>
                                        <motion.a
                                            className="hover:text-black dark:hover:text-white w-fit"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            href={platform.url}
                                        >   <li>
                                            <a  aria-label={platform.title} target="_blank" rel="noreferrer" >
                                            <IconComponent name={platform.title} />  
                                            </a>
                                            <a>{platform.title}</a>
                                            </li>                                   
                                        </motion.a>
                                    </Link>
                                );
                            })}
                        </StyledSocialList>
                        </div>
                    </section>

                    <div className="py-5 mb-6 sm:mb-0 sm:flex text-sm justify-between border-t border-double border-slate-200 dark:border-gray-400/10">
                        <div className="flex">
                        <p>Copyright © 2023 Michellehlcn. All rights reserved.</p>
                        <p className="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5">
                            <a className="hover:text-slate-900 dark:hover:text-slate-400" href="/brand">Privacy Policy</a>
                        </p>
                        </div>
                        <a className="sm:ml-4 sm:pl-4 cursor-pointer  hover:text-slate-900 dark:hover:text-slate-400 flex items-center" href=""><GoLocation /> &nbsp; Sydney, Australia.</a>
                    </div>
                </motion.div>
            </footer></>
    )
}
export default Footer;

