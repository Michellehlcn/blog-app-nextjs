import React, { useEffect, useState } from "react";

import IconComponent from "components/lib/Icon";
import Image from 'next/image';
import Testmonial from "./Testimonial";
import items from "../components/lib/testimonialData";
import { srConfig } from "components/lib/config";
import { MDXLayoutRenderer } from '../components/lib/markdown/MDXComponents';
import { getFileBySlug } from './../components/lib/markdown/mdx';

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import styled from 'styled-components';
import Link from "next/link";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Skills from "../components/lib/Skills";

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

        <h1 className="text-[#38bdf8] tracking-wide mb-5 pt-20 mt-[44px] md:mt-[60px] ">About</h1>
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
              <StyledBackgroundSection className="p-10">
                <p className="py-2 ">
                  I provide my clients with unlimited support, clear explanations, well-documented code, and actionable insights. I've developed innovative analytical tools and techniques - my own wide range of skillset over years and I believe these various tools will help me accelerate the work, simplify the complex matter and interpret the data in a way everyone can easily understand. Now in turn, let me help your business growth and overcome these hurdles.
                </p>
                <p className="py-2 underline cursor-pointer">
                  Chech out some of my latest projects
                </p>
                <p className="py-2 underline cursor-pointer">
                  Check out my personal blog
                </p>
              </StyledBackgroundSection>
            </div>

          </div>
        </div>

        {/* skillset section */}
        <div id="skillset" >
          <div class="company-slider_companySlider__o5_2m">
            <div class="jsx-4097728753 slider-container">
              <div class="jsx-4097728753 slider-content-wrapper">
                <div class="jsx-4097728753">
                  <div class="company-slider_companyLogosContainer__nLjp7 flex gap-5 items-center">
                    <div>
                      <svg height="50" version="1.1" viewBox="135.5 361.375 200 72" width="100" xmlns="http://www.w3.org/2000/svg">
                        <path d="M159.23,431.966c-5.84-0.232-10.618-1.83-14.354-4.798c-0.713-0.567-2.412-2.267-2.982-2.984 c-1.515-1.905-2.545-3.759-3.232-5.816c-2.114-6.332-1.026-14.641,3.112-23.76c3.543-7.807,9.01-15.55,18.548-26.274 c1.405-1.578,5.589-6.193,5.616-6.193c0.01,0-0.218,0.395-0.505,0.876c-2.48,4.154-4.602,9.047-5.758,13.283 c-1.857,6.797-1.633,12.63,0.656,17.153c1.579,3.116,4.286,5.815,7.33,7.307c5.329,2.611,13.131,2.827,22.659,0.632 c0.656-0.152,33.162-8.781,72.236-19.176c39.074-10.396,71.049-18.895,71.054-18.888c0.011,0.009-90.78,38.859-137.911,59.014 c-7.464,3.191-9.46,3.997-12.969,5.229C173.76,430.721,165.725,432.224,159.23,431.966z">
                        </path>
                      </svg>
                    </div>
                    <div>
                      <svg height="31px" version="1.1" viewBox="0 0 112 31" width="112px" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <path d="M74.682.8h-4.717v26.376c4.286.148 8.555.364 12.805.648v-4.648c-2.688-.18-5.385-.331-8.088-.456V.8zm37.48.002h-5.18l-3.416 7.916-3.068-7.916h-5.102l5.483 14.144-5.986 13.875c1.656.161 3.308.334 4.957.516l3.482-8.064 3.448 8.893c1.796.23 3.587.472 5.376.727l.006-.003-6.144-15.845L112.162.803zM53.776 26.946l4.716-.001V16.216h6.393v-4.648h-6.393V5.493h8.45V.805H53.776v26.141zM36.162 5.49H41.1v21.73c1.568-.058 3.141-.107 4.716-.148V5.492h4.936V.804h-14.59v4.688-.002zM20.04 28.573c4.347-.395 8.713-.72 13.1-.974v-4.648c-2.803.16-5.597.352-8.383.571v-7.034c1.828-.018 4.236-.074 6.368-.048v-4.648c-1.704-.002-4.443.024-6.368.05V5.49h8.384V.802H20.039v27.772-.001zm-9.254-10.744L4.646.803H.161v30.088c1.568-.224 3.14-.437 4.717-.642V13.888l5.462 15.69c1.717-.2 3.44-.388 5.163-.565V.803h-4.718V17.83v-.001zm75.872 10.274c1.575.12 3.147.248 4.717.387V.802h-4.716v27.302z" fill="#000" fill-rule="nonzero">
                        </path>
                      </svg>
                    </div>
                    <div>
                      <svg height="31px" version="1.1" viewBox="0 0 113 31" width="113px" xmlnsXlink="http://www.w3.org/1999/xlink">
                        <g fill="#000" fill-rule="evenodd" stroke="none" stroke-width="1" transform="translate(-1274.000000, -1343.000000) translate(-17.000000, 1337.000000) translate(1291.598806, 6.000000)">
                          <path d="M21.523 12.933h-9.39a.439.439 0 0 0-.44.439v4.59c0 .242.197.44.44.44h3.663v5.702s-.823.28-3.097.28c-2.683 0-6.43-.98-6.43-9.22 0-8.241 3.902-9.326 7.566-9.326 3.172 0 4.538.558 5.407.828.274.083.526-.189.526-.431L20.816 1.8a.41.41 0 0 0-.168-.343C20.295 1.205 18.141 0 12.699 0 6.431 0 0 2.667 0 15.486c0 12.82 7.362 14.73 13.566 14.73 5.137 0 8.253-2.195 8.253-2.195.129-.071.143-.25.143-.332V13.372a.439.439 0 0 0-.44-.44M69.918 1.537a.437.437 0 0 0-.436-.441h-5.288a.44.44 0 0 0-.437.44l.001 10.217h-8.242V1.536a.438.438 0 0 0-.436-.441h-5.287a.44.44 0 0 0-.437.44V29.2a.44.44 0 0 0 .437.443h5.287a.439.439 0 0 0 .436-.443V17.367h8.242l-.014 11.832a.44.44 0 0 0 .438.443h5.3a.44.44 0 0 0 .436-.443V1.536M31.5 5.166c0-1.904-1.526-3.442-3.41-3.442-1.88 0-3.408 1.538-3.408 3.442 0 1.902 1.528 3.444 3.409 3.444 1.883 0 3.41-1.542 3.41-3.444m-.379 18.198v-12.77a.44.44 0 0 0-.437-.44h-5.27c-.243 0-.459.249-.459.492V28.94c0 .538.335.698.769.698h4.748c.522 0 .65-.256.65-.707v-5.567M90.01 10.195h-5.247a.44.44 0 0 0-.436.443v13.564s-1.334.975-3.225.975c-1.892 0-2.394-.859-2.394-2.71v-11.83a.44.44 0 0 0-.437-.442h-5.325a.44.44 0 0 0-.437.443v12.724c0 5.502 3.067 6.848 7.285 6.848 3.461 0 6.252-1.912 6.252-1.912s.133 1.007.193 1.127c.06.119.216.24.386.24l3.387-.016a.44.44 0 0 0 .437-.441l-.001-18.57a.44.44 0 0 0-.438-.443m12.27 14.965c-1.82-.055-3.054-.88-3.054-.88v-8.761s1.218-.747 2.712-.88c1.89-.17 3.71.401 3.71 4.908 0 4.752-.821 5.69-3.367 5.613zm2.07-15.586c-2.98 0-5.007 1.33-5.007 1.33V1.535a.438.438 0 0 0-.436-.441h-5.302a.439.439 0 0 0-.437.44V29.2a.44.44 0 0 0 .437.443h3.68c.165 0 .29-.085.383-.235.091-.149.223-1.276.223-1.276s2.168 2.055 6.273 2.055c4.818 0 7.582-2.444 7.582-10.97 0-8.528-4.414-9.642-7.396-9.642zm-58.033.577h-3.966l-.006-5.239c0-.198-.102-.297-.331-.297H36.61c-.21 0-.323.092-.323.294v5.414s-2.708.654-2.892.707a.439.439 0 0 0-.316.421v3.402a.44.44 0 0 0 .437.442h2.771v8.185c0 6.079 4.265 6.676 7.142 6.676 1.315 0 2.888-.422 3.148-.518.157-.058.248-.22.248-.397l.005-3.742a.447.447 0 0 0-.438-.442c-.232 0-.823.094-1.432.094-1.948 0-2.608-.906-2.608-2.078v-7.778h3.966a.44.44 0 0 0 .438-.442v-4.261a.439.439 0 0 0-.438-.44">
                          </path>
                        </g>
                      </svg>
                    </div>

                  </div></div></div></div></div>

        </div>

        {/* Q&A section */}
        <div id="QA" className="mt-[44px] md:mt-[60px] max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl relative mx-auto p-4 mb-10 text-neutral-200;">
          <div className="px-2 m-auto gap-8 max-w-5xl 2xl:max-w-6xl 3xl:max-w-7xl p-5 grid">

            <p className="uppercase text-xl tracking-wide text-[#5651e5] mb-5 col-span-12">Q&A Section</p>
            <div className="col-span-12 grid gap-8 ">
              <p className="shadow-xl bg-[#112240] rounded-xl p-10 col-start-1 col-span-2 text-[#38bdf8] ">
                How did you build this site?</p>
              <p className="shadow-xl bg-[#112240] rounded-xl p-10 col-start-3 col-span-2 ">
                I've gotten asked a few times how I went about building the site. For the front end, I used ReactJS. The backend is using FastAPI.
              </p>
            </div>

            <div className=" col-span-12 grid gap-8 ">
              <p className="shadow-xl bg-[#112240] rounded-xl p-10 col-start-1 col-span-2 text-[#38bdf8]  ">
                How were clients' comments about your services?</p>
              <p className="shadow-xl bg-[#112240] rounded-xl p-10 col-start-3 col-span-2 ">
                I've received really welcomed and nice compliments about my works, and these really gave me great encouragement to continue and improve myself in this field. Here are a few examples:
              </p>
            </div>

            <div className=" col-span-12 grid gap-8">
              <p className="shadow-xl bg-[#112240] rounded-xl p-10 col-start-1 col-span-2 text-[#38bdf8]  ">
                Why did you choose to work in IT?
              </p>
              <p className="shadow-xl bg-[#112240] rounded-xl p-10 col-start-3 col-span-2 ">
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
      </div>
    </div>
  )
}
export default About;