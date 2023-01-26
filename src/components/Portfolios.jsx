import React from "react";
import Portfolioitem from "./PortfolioItem";

const Portfolios = () => {
    return (
        <div id="portfolio" className="w-full "> 
            <div className="max-w-[1240px] mx-auto px-2 py-16 w-full">
                <p className="text-xl tracking-wildest uppercase text-[#5651e5]">Portfolios</p>
                <h2 className="py-4">What I've built</h2>
                <div className="grid md:grid-cols-2 gap-8">
                <Portfolioitem tittle='' backgroundImg={'/assets/portfolios/0.jpeg'} projectUrl='' tech=''/>
                <Portfolioitem tittle='' backgroundImg={'/assets/portfolios/1.jpeg'} projectUrl='' tech=''/>
                <Portfolioitem tittle='' backgroundImg={'/assets/portfolios/2.jpeg'} projectUrl='' tech=''/>
                <Portfolioitem tittle='' backgroundImg={'/assets/portfolios/3.png'} projectUrl='' tech=''/>
                <Portfolioitem tittle='' backgroundImg={'/assets/portfolios/4.png'} projectUrl='' tech=''/>
                <Portfolioitem tittle='' backgroundImg={'/assets/portfolios/5.jpg'} projectUrl='' tech=''/>
                </div>
            </div>
        </div>
    )
    }
export default Portfolios;