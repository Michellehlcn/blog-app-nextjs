import React, { useEffect, useState } from "react";

import IconComponent from "components/lib/Icon";
import Image from 'next/image';
import Testmonial from "./Testimonial";
import items from "../components/lib/testimonialData";
import { srConfig } from "components/lib/config";
import { MDXLayoutRenderer } from '../components/lib/markdown/MDXComponents';
import { getFileBySlug } from './../components/lib/markdown/mdx';

import { BsChevronCompactLeft, BsChevronCompactRight, BsPersonBoundingBox } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import styled from 'styled-components';
import Link from "next/link";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Skills from "../components/lib/Skills";
import aws from './../components/lib/icons/aws';
import { FaAws } from "react-icons/fa";

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const authorDetails = await getFileBySlug('authors', ['default'])
  return { props: { authorDetails } }
}

const StyledBackgroundSection = styled.section`
background-color: #112240;
`;

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }
  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }
  .projects-grid {
    
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;


const StyledProject = styled.li`
--dark-navy: #020c1b;
--navy: #0a192f;
--light-navy: #112240;
--lightest-navy: #233554;
--navy-shadow: rgba(2,12,27,0.7);
--dark-slate: #495670;
--slate: #8892b0;
--light-slate: #a8b2d1;
--lightest-slate: #ccd6f6;
--white: #e6f1ff;
--green: #64ffda;
--green-tint: rgba(100,255,218,0.1);
--pink: #f57dff;
--blue: #57cbff;
--font-sans: "Calibre","Inter","San Francisco","SF Pro Text",-apple-system,system-ui,sans-serif;
--font-mono: "SF Mono","Fira Code","Fira Mono","Roboto Mono",monospace;
--fz-xxs: 12px;
--fz-xs: 13px;
--fz-sm: 14px;
--fz-md: 16px;
--fz-lg: 18px;
--fz-xl: 20px;
--fz-xxl: 22px;
--fz-heading: 32px;
--border-radius: 4px;
--nav-height: 100px;
--nav-scroll-height: 70px;
--tab-height: 42px;
--tab-width: 120px;
--easing: cubic-bezier(0.645,0.045,0.355,1);
--transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
--hamburger-width: 30px;
--ham-before: top 0.1s ease-in 0.25s,opacity 0.1s ease-in;
--ham-before-active: top 0.1s ease-out,opacity 0.1s ease-out 0.12s;
--ham-after: bottom 0.1s ease-in 0.25s,transform 0.22s cubic-bezier(0.55,0.055,0.675,0.19);
--ham-after-active: bottom 0.1s ease-out,transform 0.22s cubic-bezier(0.215,0.61,0.355,1) 0.12s;
-webkit-font-smoothing: antialiased;
color: var(--slate);
font-size: var(--fz-xl);
line-height: 1.3;


list-style: none;
box-sizing: inherit;
position: relative;
cursor: default;
transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, opacity 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s, transform 0.5s cubic-bezier(0.645, 0.045, 0.355, 1) 0s;
visibility: visible;
opacity: 1;
transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
  position: relative;
  cursor: default;
  transition: var(--transition);
  @media {
    &:hover,
    &:focus-within {
      .project-inner {
        transform: translateY(-7px);
      }
    }
  }
  a {
    position: relative;
    z-index: 1;
  }
  .project-inner {
    
    ${({ theme }) => theme.mixins.boxShadow};
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    height: 100%;
    padding: 2rem 1.75rem;
    border-radius: var(--border-radius);
    background-color: var(--light-navy);
    transition: var(--transition);
  }
  .folder {
    color: green;
    svg {
      width: 60px;
      height: 60px;

    }    
  .project-top {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 35px;

    }
    .project-links {
      display: flex;
      align-items: center;
      margin-right: -10px;
      color: var(--light-slate);
      a {
        ${({ theme }) => theme.mixins.flexCenter};
        padding: 5px 7px;
        &.external {
          svg {
            width: 22px;
            height: 22px;
            margin-top: -4px;
          }
        }
        svg {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
  .project-title {
    margin: 0 0 10px;
    color: var(--lightest-slate);
    font-size: var(--fz-xxl);
    a {
      position: static;
      &:hover{
        color: #38bdf8;
      }; 
      &:before {
        content: '';
        display: block;
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
    }
  }
  .project-description {
    color: var(--light-slate);
    font-size: 15px;
    font-style: italic;
    a {
      ${({ theme }) => theme.mixins.inlineLink};
    }
  }
  .project-tech-list {
    display: flex;
    align-items: flex-end;
    flex-grow: 1;
    flex-wrap: wrap;
    padding: 0;
    margin: 20px 0 0 0;
    list-style: none;
    li {
      font-family: var(--font-mono);
      font-size: var(--fz-xxs);
      line-height: 1.75;
      &:not(:last-of-type) {
        margin-right: 15px;
      }
    }
  }
`;


const About = ({ authorDetails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === items.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  const GRID_LIMIT = 6;
  const projects = items;
  let projectsToShow = projects;
  const [showMore, setShowMore] = useState(false);

  const firstSix = projects.slice(0, GRID_LIMIT);
  projectsToShow = showMore ? projects : firstSix;

  const ProjectInner = (item) => {
    const status = item.status;
    const imgSrc = item.imgSrc;
    const name = item.name;
    const position = item.position;
    const quote = item.quote;

    return (

      <div className="project-inner">
        <header>

          <div className="project-top flex gap-4 items-center py-4">
            <div className="folder" >
              <IconComponent name="profile" />
            </div>
            <h3 className="project-title">
              <a href="" target="_blank" rel="noreferrer">
                {name}
              </a>
            </h3>
          </div>

          <div className="project-description" dangerouslySetInnerHTML={{ __html: quote }} />
        </header>

        <footer>
          <ul className="project-tech-list">
            <li>{position}</li>
          </ul>
        </footer>

      </div>
    );
  };
  const { mdxSource, frontMatter } = authorDetails;

  return (

    <div id='about' >

      {/* Biography section */}

      <div id="bio" >

        <h1 className="text-[#38bdf8] tracking-wide mb-5 pt-20 mt-[44px] md:mt-[60px] flex gap-5"> <BsPersonBoundingBox />About</h1>
        <p className="uppercase text-xl tracking-wide text-[#5651e5] col-span-12">Biography</p>
        <MDXLayoutRenderer
          layout={frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={mdxSource}
          frontMatter={frontMatter}
        />
        <div className=" max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl relative mx-auto text-neutral-200;" >
          <div className="px-2 m-auto gap-8 max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl  grid">
            <div className="grid md:grid-cols-2 grid-cols-1 mb-5 col-span-12 gap-2">
              <StyledBackgroundSection>
                <div className="col-start-1 col-span-2 justify-self-start  p-10 ">

                  <p className="text-gray-500">My name's <span className="text-[#38bdf8]">Michelle</span>.</p>
                  <p className="py-2 text-gray-500">
                    Having worked in Banking and Finance, Accounting in ten years, after a few years of transition spending time in freelancing both data analysis and buidling application I started working in software development in a finance start-up which was relatively close to my background.
                  </p>
                  <p className="py-2 text-gray-500">
                    My responsibility was while providing supports to the team as a team leader, I built and completed electronic trading workflow, facilitate the liquidity of derivatives dealers with the low cost and scale of system, real time execution in the global interest rate swap and options market.
                  </p>
                  <p className="py-2 text-gray-500 ">
                    My now and then work as a freelancer consists of helping companies and researchers to analyse their datasets, bulding a micro service application. I enjoy all things coding and hope to eventually push the boundaries of the current scope. Complex frameworks I have been working are ReactJS, NextJS, Svelte, NodeJs, FastAPI, DJango, Java Springbot. 
                  </p>
                </div>
              </StyledBackgroundSection>
              <StyledBackgroundSection>
                <div className="col-start-1 col-span-2 justify-self-start p-10 ">
                  <p className="py-2 text-gray-500">
                  Current focus is the creations of automated solutions for ensuring restructured platforms perform at least an order of magnitude better, going forward. This includes implementation of CI/CD pipelines and overall workflow improvements, AWS Clould Service as a professional, Blockchain.
                  </p>
                  <p className="py-2 text-gray-500">
                  I've developed innovative analytical tools and techniques - my own wide range of skillset over years and I believe these various tools will help me accelerate the work, simplify the complex matter and interpret the data in a way everyone can easily understand. Now in turn, let me help your business growth and overcome these hurdles. I'm open for any collaboration.
                  </p>
                  <p className="py-2 text-gray-500">
                  Chech out some of 👉 <a href="/Projects" className="underline cursor-pointer">my latest projects</a>
                </p>
                <p className="py-2 text-gray-500">
                  Check out my personal 👉 <a href='https://michellehlcn.wordpress.com' target='_blank' className="underline cursor-pointer">blog</a>
                </p>
                </div>
              </StyledBackgroundSection>
         
            </div>
           
          </div>
        </div>

        {/* skillset section */}
        <div id="skillset" >
          <div className="company-slider_companySlider__o5_2m max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl relative mx-auto">
            <div className="jsx-4097728753 slider-container">
              <div className="jsx-4097728753 slider-content-wrapper">
                <div className="jsx-4097728753 max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl">
                  <div className="company-slider_companyLogosContainer__nLjp7 flex gap-5 items-center  ">

                    <div>
                      <svg height="31px" version="1.1" viewBox="0 0 113 31" width="113px" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g fill="#000"  stroke="none" strokeWidth="1" transform="translate(-1274.000000, -1343.000000) translate(-17.000000, 1337.000000) translate(1291.598806, 6.000000)">
                          <path d="M21.523 12.933h-9.39a.439.439 0 0 0-.44.439v4.59c0 .242.197.44.44.44h3.663v5.702s-.823.28-3.097.28c-2.683 0-6.43-.98-6.43-9.22 0-8.241 3.902-9.326 7.566-9.326 3.172 0 4.538.558 5.407.828.274.083.526-.189.526-.431L20.816 1.8a.41.41 0 0 0-.168-.343C20.295 1.205 18.141 0 12.699 0 6.431 0 0 2.667 0 15.486c0 12.82 7.362 14.73 13.566 14.73 5.137 0 8.253-2.195 8.253-2.195.129-.071.143-.25.143-.332V13.372a.439.439 0 0 0-.44-.44M69.918 1.537a.437.437 0 0 0-.436-.441h-5.288a.44.44 0 0 0-.437.44l.001 10.217h-8.242V1.536a.438.438 0 0 0-.436-.441h-5.287a.44.44 0 0 0-.437.44V29.2a.44.44 0 0 0 .437.443h5.287a.439.439 0 0 0 .436-.443V17.367h8.242l-.014 11.832a.44.44 0 0 0 .438.443h5.3a.44.44 0 0 0 .436-.443V1.536M31.5 5.166c0-1.904-1.526-3.442-3.41-3.442-1.88 0-3.408 1.538-3.408 3.442 0 1.902 1.528 3.444 3.409 3.444 1.883 0 3.41-1.542 3.41-3.444m-.379 18.198v-12.77a.44.44 0 0 0-.437-.44h-5.27c-.243 0-.459.249-.459.492V28.94c0 .538.335.698.769.698h4.748c.522 0 .65-.256.65-.707v-5.567M90.01 10.195h-5.247a.44.44 0 0 0-.436.443v13.564s-1.334.975-3.225.975c-1.892 0-2.394-.859-2.394-2.71v-11.83a.44.44 0 0 0-.437-.442h-5.325a.44.44 0 0 0-.437.443v12.724c0 5.502 3.067 6.848 7.285 6.848 3.461 0 6.252-1.912 6.252-1.912s.133 1.007.193 1.127c.06.119.216.24.386.24l3.387-.016a.44.44 0 0 0 .437-.441l-.001-18.57a.44.44 0 0 0-.438-.443m12.27 14.965c-1.82-.055-3.054-.88-3.054-.88v-8.761s1.218-.747 2.712-.88c1.89-.17 3.71.401 3.71 4.908 0 4.752-.821 5.69-3.367 5.613zm2.07-15.586c-2.98 0-5.007 1.33-5.007 1.33V1.535a.438.438 0 0 0-.436-.441h-5.302a.439.439 0 0 0-.437.44V29.2a.44.44 0 0 0 .437.443h3.68c.165 0 .29-.085.383-.235.091-.149.223-1.276.223-1.276s2.168 2.055 6.273 2.055c4.818 0 7.582-2.444 7.582-10.97 0-8.528-4.414-9.642-7.396-9.642zm-58.033.577h-3.966l-.006-5.239c0-.198-.102-.297-.331-.297H36.61c-.21 0-.323.092-.323.294v5.414s-2.708.654-2.892.707a.439.439 0 0 0-.316.421v3.402a.44.44 0 0 0 .437.442h2.771v8.185c0 6.079 4.265 6.676 7.142 6.676 1.315 0 2.888-.422 3.148-.518.157-.058.248-.22.248-.397l.005-3.742a.447.447 0 0 0-.438-.442c-.232 0-.823.094-1.432.094-1.948 0-2.608-.906-2.608-2.078v-7.778h3.966a.44.44 0 0 0 .438-.442v-4.261a.439.439 0 0 0-.438-.44">
                          </path>
                        </g>
                      </svg>
                    </div>
                    <div>
                    <svg height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M24 44C12.972 44 4 35.028 4 24S12.972 4 24 4s20 8.972 20 20-8.972 20-20 20zm0-42C11.869 2 2 11.869 2 24s9.869 22 22 22 22-9.869 22-22S36.131 2 24 2zm-6.769 33.25h-5.355l6.345-13.291 2.681 5.533-3.671 7.758zm1.883-16.035a1.001 1.001 0 00-.9-.564h-.003a.998.998 0 00-.899.57L9.389 35.819a.998.998 0 00.902 1.431h7.573c.387 0 .739-.223.905-.572l4.146-8.763a1.002 1.002 0 00-.004-.864l-3.797-7.836zM36.125 35.25h-5.452l-9.912-21.297a1.001 1.001 0 00-.907-.578h-3.603l.004-4.125h7.22l9.864 21.295a1 1 0 00.907.58h1.879v4.125zm1-6.125h-2.24L25.021 7.83a1.003 1.003 0 00-.908-.58h-8.857a1 1 0 00-1 .999l-.006 6.125a1 1 0 001 1.001h3.967l9.912 21.297a1 1 0 00.906.578h7.09a1 1 0 001-1v-6.125a1 1 0 00-1-1z"  fillRule="evenodd"></path></svg>
                    </div>
                    <div>
                    <svg  height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M6 35h24v-2H6v2zm-4-7.073h15v-2H2v2zM22 31v-3.073h-2.916v-2H22V23h2v2.927h3v2h-3V31h-2zm12.4 8.656l2.559-9.675a1.003 1.003 0 00-.967-1.256h-4.384L35.641 20h6.37l-4.007 6.474a1.003 1.003 0 00-.024 1.013c.177.317.512.513.874.513h3.988L34.4 39.656zm11.291-13.111a.999.999 0 00-.89-.545h-4.152l4.007-6.473a1 1 0 00-.85-1.527h-8.805c-.39 0-.744.227-.908.58l-4.956 10.725c-.143.31-.118.671.065.959.185.287.502.461.843.461h4.648l-3.598 13.61a1 1 0 001.776.843L45.61 27.587a1 1 0 00.081-1.042zM28.448 40.084l.301 1.977c-1.511.23-3.088.347-4.686.347-7.21 0-14.51-2.038-14.51-5.933h2c0 1.642 4.76 3.933 12.51 3.933a29.23 29.23 0 004.385-.324zM11.033 9.754C11.033 7.84 16.464 5 23.966 5 31.763 5 37 7.572 37 9.976c0 1.662-5.064 4.077-13 4.077-7.841 0-12.879-2.358-12.998-4.018l.031-.281zM11 13.123c2.768 1.919 7.991 2.93 13 2.93s10.232-1.011 13-2.93V16h2v-6h-.003c0-.008.003-.015.003-.024C39 5.934 32.677 3 23.966 3 15.933 3 9.136 6.047 9.034 9.672L9 9.976c0 .009.003.016.003.024H9v14h2V13.123z" fillRule="evenodd"></path></svg>
                    </div>
                   

                  </div></div></div></div></div>

        </div>

        {/* Q&A section */}
        <div id="QA" className="mt-[44px] md:mt-[60px] max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl relative mx-auto p-4 mb-10 text-neutral-200;">
          <div className="px-2  m-auto gap-8 max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl p-5 grid">

            <p className="uppercase text-xl tracking-wide text-[#5651e5] mb-5 col-span-12">Q&A Section</p>
            <div className="col-span-12 grid gap-3 ">
              <p className=" bg-[#112240]  p-10 text-[#38bdf8] ">
                How did you build this site?
              <p className=" bg-[#112240]  p-10 text-gray-500">
                This is the third time I build my own portfolio. Starting from a very simple plain HTML, CSS and moving forward to a complex framework like react and fastapi, this time I implemented the new features from NextJS with a rendered server site, decorated by using TailwindCSS, deployed to Vercel. The reason why I choose this framework because their attractiveness - it's React-based and combined with flexibility in rendering, it made the code looked tight and neat. While making this website I also received the support from vercel team via Twitter messages. That made me feel more inclusively to the global tech movement.
              </p>
              </p>
            </div>

            <div className=" col-span-12 grid gap-3">
              <p className=" bg-[#112240]  p-10 text-[#38bdf8]  ">
                Why did you choose to work in IT?   
              <p className=" bg-[#112240] p-10  text-gray-500 ">
                How did I go from finance to software engineer, it was definitely not an overnight story.
                My background was in Finance but what I can say is the life guiding me through. 
                In 2020, I was having an injury and in the middle of Covid-19 pandemic I lost a job, I started to work online which didn't require my physical ability. 
                I've learnt coding and picked up projects since then.
                I found these were actually so cool and as the matter of the fact that you don't need a permission to do what you want to do in life.
                A highschool girl past over 15 years achieved the highest ranking in Programming Pascal Class didn't expect this was something that she can do. This had fueled my confidence optimistically to keep going and exploring. 
              </p>
              </p>
            </div>

            <div className=" col-span-12 grid gap-3 ">
              <p className=" bg-[#112240]  p-10  text-[#38bdf8]  ">
                How were clients' comments about your services?
              <p className=" bg-[#112240]  p-10  text-gray-500">
                I've received really welcomed and nice compliments about my works, and these really gave me great encouragement to continue and improve myself in this field. Here are a few examples below.
              </p>
              </p>
            </div>
            {/* TESTIMONALS */}
            <p className="uppercase text-xl tracking-wide text-[#5651e5]  col-span-12">What clients said about working with me?</p>
            <div className="col-span-12">
              <StyledProjectsSection>
                <ul className="projects-grid">
                  <TransitionGroup component={null}>
                    {projectsToShow &&
                      projectsToShow.map((i, index) => (
                        <CSSTransition
                          key={index}
                          classNames="fadeup"
                          timeout={index >= GRID_LIMIT ? (index - GRID_LIMIT) * 300 : 300}
                          exit={false}>
                          <StyledProject key={index} style={{
                            transitionDelay: `${index >= GRID_LIMIT ? (index - GRID_LIMIT) * 100 : 0}ms`,
                          }}>

                            {ProjectInner(i)}
                          </StyledProject>
                        </CSSTransition>
                      ))}
                  </TransitionGroup>
                </ul>
                <div className="py-8">
                  <a className="border-slate-50 border-1 ring-1 rounded-lg py-3 p-3 cursor-pointer mx-auto text-[#83a2b4] hover:text-[#38bdf8] 
                        " onClick={() => setShowMore(!showMore)}>
                    Show {showMore ? 'Less' : 'More'}
                  </a>
                </div>
              </StyledProjectsSection>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About;