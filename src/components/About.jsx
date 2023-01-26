import React from "react";
import Image from 'next/image';

const About = () => {
    return (
        <div id='about' className="w-full p-2 flex items-center py-16">
            <div className="max-w-[1240px] m-auto  gap-8">
           
                    <p className="uppercase text-xl tracking-wide text-[#5651e5]">About</p>
                    <h2 className="py-4">Who I am</h2>
                    <p className="py-2 text-gray-600">// I am not your normal Developer.</p>
                    <p className="py-2 text-gray-600">
                        After having worked in Banking and Finance, Accounting, I'm now working as a data analysis freelancer with a long-term goal towards technical applications in finance.
                    </p>
                    <p className="py-2 text-gray-600"> 
                        My job consists in helping companies and researchers to analyse their datasets. I am skilled for most steps: data mining, data pre-processing, data visualization and results communication - analysis. I'm a passionate programmer. I enjoy all things coding and hope to eventually push the boundaries of the current scope. I currently love using python (flask, django, fastAPI, etc)to create helpful applications. Current focus is the creations of automated solutions for ensuring restructured platforms perform at least an order of magnitude better, going forward. This includes implementation of CI/CD pipelines and overall workflow improvements.
                    </p>
                    <p className="py-2 text-gray-600">
                        I provide my clients with unlimited support, clear explanations, well-documented code, and actionable insights. I've developed innovative analytical tools and techniques - my own wide range of skillset over years and I believe these various tools will help me accelerate the work, simplify the complex matter and interpret the data in a way everyone can easily understand. Now in turn, let me help your business growth and overcome these hurdles.
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">
                        Chech out some of my latest projects
                    </p>
                    <p className="py-2 text-gray-600 underline cursor-pointer">
                        Check out my personal blog
                    </p>
                    

                    <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 case-in duration-300">
                        <Image width="330" height="330" className="rounded-xl" src="/assets/pexels-karen-laårk-boshoff-9523768.jpg" alt="/"/>
                    </div>
                    
                    <h2>
                        Q&A Section
                    </h2>
                    <p>
                        How did you build this site?

                        I've gotten asked a few times how I went about building the site. For the front end, I used ReactJS. The backend is using FastAPI.
                    </p>
                    <p>
                        How were clients' comments about your services?

                        I've received really welcomed and nice compliments about my works, and these really gave me great encouragement to continue and improve myself in this field. Here are a few examples:
                    </p>
                    {/* TESTIMONALS */}
                    <p>
                        Why did you choose to work in IT?

                        My background was Finance but what I can say is the life guiding me through. In 2020, I was having an injury and in the middle of Covid-19 pandemic I lost a job, I started to work online which didn't require my physical ability. I've learnt coding and picked up projects since then.
                    </p>
                
         
            </div>
        </div>
    )
}
export default About;