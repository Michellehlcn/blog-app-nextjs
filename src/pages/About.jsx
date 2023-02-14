import React, { useState } from "react";

import Image from 'next/image';
import Testmonial from "./Testimonial";
import items from "../components/lib/testimonialData";

import { BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

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
  
    return (
        <div id='about' className="mt-[44px] md:mt-[60px] max-w-4xl 2xl:max-w-5xl 3xl:max-w-7xl relative mx-auto p-4 mb-10 text-neutral-200;">
            <div className="px-2 m-auto gap-8 max-w-4xl exl:max-w-5xl 3xl:max-w-7xl p-5 grid">
                <p className="uppercase text-xl tracking-wide text-[#5651e5] mb-5">Biography</p>
                <div className="grid grid-cols-2 mb-5 col-span-12">
                    <div className="col-start-1 col-span-2 justify-self-start shadow-xl bg-slate-50 rounded-xl p-10 ">

                        <p>My name's <span className="text-[#38bdf8]">Michelle</span>.</p>
                        <p className="py-2 ">
                            Having worked in Banking and Finance, Accounting in consittute years, I'm now working as a data analysis freelancer with a long-term goal towards technical applications in finance.
                        </p>
                        <p className="py-2 ">
                            My job consists in helping companies and researchers to analyse their datasets. I am skilled for most steps: data mining, data pre-processing, data visualization and results communication - analysis. I'm a passionate programmer. I enjoy all things coding and hope to eventually push the boundaries of the current scope. I currently love using python (flask, django, fastAPI, etc)to create helpful applications. Current focus is the creations of automated solutions for ensuring restructured platforms perform at least an order of magnitude better, going forward. This includes implementation of CI/CD pipelines and overall workflow improvements.
                        </p>
                    </div>
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


  <div className='max-w-[1400px] h-[780px] w-full m-auto py-4 px-4 relative group'>
       <div className="card w-full h-full rounded-2xl bg-center bg-cover duration-500">
                        
                        <div className="text">
                            <h3 className="name">{items[currentIndex].name}</h3>
                            <i className="position">{items[currentIndex].position}</i>
                            <p className="testimony">{items[currentIndex].quote}</p>
                        </div>
                    </div>
  
    {/* Left Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
      <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>
    <div className='flex top-4 justify-center py-2'>
      {items.map((slide, slideIndex) => (
        <div
          key={slideIndex}
          onClick={() => goToSlide(slideIndex)}
          className='text-2xl cursor-pointer'
        >
          <RxDotFilled />
        </div>
      ))}
    </div>
  </div>

                </div>
            </div>
        </div>
    )
}
export default About;