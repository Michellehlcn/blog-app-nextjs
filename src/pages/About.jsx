import React, { useEffect, useState } from "react";

import IconComponent from "components/lib/Icon";
import Image from 'next/image';
import Testmonial from "./Testimonial";
import items from "../components/lib/testimonialData";
import { srConfig } from "components/lib/config";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import styled from 'styled-components';
import Link from "next/link";
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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


const About = () => {
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
  const ProjectInner = (item) => {
    console.log("got this", item);


    console.log(showMore);

    const firstSix = projects.slice(0, GRID_LIMIT);
    projectsToShow = showMore ? projects : firstSix;

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

  return (
    <div id='about' className="mt-[44px] md:mt-[60px] max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl relative mx-auto p-4 mb-10 text-neutral-200;">
      <div className="px-2 m-auto gap-8 max-w-4xl exl:max-w-5xl 3xl:max-w-7xl p-5 grid">
        <p className="uppercase text-xl tracking-wide text-[#5651e5] mb-5">Biography</p>
        <div className="grid grid-cols-2 mb-5 col-span-12">
          <StyledBackgroundSection>
          <div className="col-start-1 col-span-2 justify-self-start shadow-xl rounded-xl p-10 ">
  
            <p>My name's <span className="text-[#38bdf8]">Michelle</span>.</p>
            <p className="py-2 ">
              Having worked in Banking and Finance, Accounting in consittute years, I'm now working as a data analysis freelancer with a long-term goal towards technical applications in finance.
            </p>
            <p className="py-2 ">
              My job consists in helping companies and researchers to analyse their datasets. I am skilled for most steps: data mining, data pre-processing, data visualization and results communication - analysis. I'm a passionate programmer. I enjoy all things coding and hope to eventually push the boundaries of the current scope. I currently love using python (flask, django, fastAPI, etc)to create helpful applications. Current focus is the creations of automated solutions for ensuring restructured platforms perform at least an order of magnitude better, going forward. This includes implementation of CI/CD pipelines and overall workflow improvements.
            </p>
          </div>
          </StyledBackgroundSection>
          {/* <div className="py-2 w-full h-auto m-auto  shadow-gray-400 rounded-xl flex items-center justify-end p-4 hover:scale-105 case-in duration-300">
                        <Image width="330" height="330" className="rounded-xl" src="" alt="/" />
                    </div> */}
        </div>
        <div className=" mb-5 col-span-12">
          <p className="py-2 ">
            I provide my clients with unlimited support, clear explanations, well-documented code, and actionable insights. I've developed innovative analytical tools and techniques - my own wide range of skillset over years and I believe these various tools will help me accelerate the work, simplify the complex matter and interpret the data in a way everyone can easily understand. Now in turn, let me help your business growth and overcome these hurdles.
          </p>
          <p className="py-2 underline cursor-pointer">
            Chech out some of my latest projects
          </p>
          <p className="py-2 underline cursor-pointer">
            Check out my personal blog
          </p>
        </div>



        <p className="uppercase text-xl tracking-wide text-[#5651e5] mb-5 col-span-12">Q&A Section</p>
        <div className="col-span-12 grid gap-8 ">
          <p className="shadow-xl bg-slate-50 rounded-xl p-10 col-start-1 col-span-2 text-[#5651e5] ">
            How did you build this site?</p>
          <p className="shadow-xl bg-slate-50 rounded-xl p-10 col-start-3 col-span-2 ">
            I've gotten asked a few times how I went about building the site. For the front end, I used ReactJS. The backend is using FastAPI.
          </p>
        </div>

        <div className=" col-span-12 grid gap-8 ">
          <p className="shadow-xl bg-slate-50 rounded-xl p-10 col-start-1 col-span-2 text-[#5651e5] ">
            How were clients' comments about your services?</p>
          <p className="shadow-xl bg-slate-50 rounded-xl p-10 col-start-3 col-span-2 ">
            I've received really welcomed and nice compliments about my works, and these really gave me great encouragement to continue and improve myself in this field. Here are a few examples:
          </p>
        </div>

        <div className=" col-span-12 grid gap-8">
          <p className="shadow-xl bg-slate-50 rounded-xl p-10 col-start-1 col-span-2 text-[#5651e5] ">
            Why did you choose to work in IT?
          </p>
          <p className="shadow-xl bg-slate-50 rounded-xl p-10 col-start-3 col-span-2 ">
            My background was Finance but what I can say is the life guiding me through. In 2020, I was having an injury and in the middle of Covid-19 pandemic I lost a job, I started to work online which didn't require my physical ability. I've learnt coding and picked up projects since then.
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
  )
}
export default About;