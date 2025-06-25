import React from "react";
import Header from './assets/components/Header'
import Intro from './assets/components/Intro'
import right from '/images/right.png';
import angry from '/images/angry.gif';
import avatar from '/images/image_fx.jpg'
import DottedButton from './assets/components/Button';
import SparklesPreview from './assets/components/projects';
import MyStack from './assets/components/Stack';
import Marquee from './assets/components/Marquee';
import Card from './assets/components/Card';
import { AnimatedTestimonialsDemo } from './assets/components/Testimonials';
import Test from './assets/components/Test';
import ResponsiveCard from './assets/components/reponsivecard';

function Home() {
    return (
        <div className="font-Grotesk px-5 lg:px-20">
            <div className='w-full' id="home">
                <div className='font-Grotesk relative mt-30 md:mt-60 lg:mt-30'>
                    <div className='flex justify-center mb-10'>
                        <div className='w-30 h-30 bg-[#D1D5DB] left-269 rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] rounded-tl-[60px] items-center justify-center flex lg:hidden'>
                        <img src={avatar} alt="" className='rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] rounded-tl-[60px] w-26' id='right'/>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <h1 className="font-Grotesk text-[#FFD700] font-extrabold text-5xl whitespace-nowrap md:text-7xl lg:text-8xl mb-5">WEB DESIGNER</h1>
                        <img src={right} alt="" className='w-30 mx-5 hidden lg:block' id='right'/>
                    </div>
                    <div className='flex justify-center'>
                        <img src={angry} alt="" className='w-20 mx-10 hidden lg:block' id='right'/>
                        <h1 className="text-[#F8FAFC] text-center font-extrabold text-5xl whitespace-nowrap md:text-7xl lg:text-8xl">WEB DEVELOPER</h1>
                    </div>
                    <div className='hidden w-30 h-30 bg-[#D1D5DB] left-269 rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] items-center justify-center lg:absolute lg:flex lg:left-[83%]'>
                        <img src={avatar} alt="" className='rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] rounded-tl-[60px] w-26' id='right'/>
                    </div>
                    <div className='text-gray-100 mt-30 flex justify-center lg:mt-30 lg:flex lg:justify-center lg:items-center'>
                        <div>
                            <p><span className='text-[#FFC700] font-bold'>Open to</span> new Job offers</p>
                        </div>
                        <div className='h-3 w-3 bg-[#E5EDEF] rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] rounded-tl-[60px] mx-2 mt-1'></div>
                    </div>
                    <div className='text-gray-100 flex flex-col justify-center items-center mt-10 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:mt-10 lg:mb-5'>
                        <div>
                            <p>SAY HELLO</p>
                        </div>
                        <div>
                            <ul className='flex gap-5'>
                                <li>Twitter</li>
                                <li>insta</li>
                            </ul>
                        </div>
                        <div className='mt-10 mx-2 mb-10 lg:w-170 lg:p-5'>
                            <p>Hello there, I am Gideon  – a <span className='text-[#FFC700] font-bold'>fullstack developer</span> specializing in web and mobile development for FinTech, eCommerce, and SaaS. 
                              I craft user-focused designs that drive conversions and resonate with audiences. Currently based in Accra, Ghana.
                            </p>
                        </div>
                        <div>
                            <DottedButton />
                        </div>
                    </div>
                </div>
            </div>
            <div ref={targetRef} className='font-Grotesk relative'>
                <SparklesPreview animationScale={scale} animationOpacity={opacity}/>
                <div className='grid grid-cols-1 px-2 md:grid-cols-2 gap-15 lg:px-30 lg:grid-cols-2 mb-10'>
                        {/* <Card />
                        <Card />
                        <Card />
                        <Card /> */}
                    <ResponsiveCard/>
                    <ResponsiveCard/>
                    <ResponsiveCard/>
                    <ResponsiveCard/>
                </div>
            </div>
            <div className='font-Grotesk'>
                <MyStack/>
                <div className='container mx-auto w-full text-gray-100 flex justify-center items-center overflow-x-hidden'>
                    <Marquee />
                </div>
            </div>
            <div className='font-Grotesk'>
                <Test/>
                <AnimatedTestimonialsDemo/>
            </div>
            <div className='w-full h-screen font-Grotesk text-gray-100 flex flex-col justify-center items-center'>
                <h3 className='font-extrabold text-3xl md:text-7xl'>INTERESTED IN</h3>
                <h3 className='font-extrabold text-3xl mb-4 md:text-7xl'>WORKING TOGETHER?</h3>
                <DottedButton />
            </div>
        </div>
    )
}

export default Home;