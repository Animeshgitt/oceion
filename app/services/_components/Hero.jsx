'use client'
import React from "react";
import Link from "next/link";
import { useState } from "react";
import Modal from "../../_components/Modal";

const Hero =() =>{
    const [isModalOpen,setIsModalOpen]=useState(false);
     return (
        
        <>
        <Modal isOpen={isModalOpen} onClose={()=>setIsModalOpen(false)} title="Book your Consultation"></Modal>
        {/* hero section */}
<div className="hero-grid relative w-full bg-navy flex flex-col lg:min-h-screen
lg:items-center justify-center z-0 py-12 md:py-3 lg:py-5 overflow-hidden">
        {/* Invisible spacer for mobile navbar height */}
    <div className="h-10 w-full lg:hidden flex-none"></div>
    {/* Main Container: Centered both ways */}
    <div className="flex relative w-full lg:w-[80vw] justify-between ">

        {/* Left Container */}
        <div className="w-[95vw]  lg:w-1/2 flex flex-col justify-center extra-padding gap-y-4 relative left-5 ">

             <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-sky-500 shrink-0" />
            <span className="text-xs font-semibold tracking-widest 
              text-element text-bright text-[12px] uppercase spacing text-left text-element">
              What we offer
            </span>
          </div>
            <h1 className="text-white text-7xl mt-2 hero-headline font-stretch-ultra-expanded text-left"> 
                Services Built for
                <br/>  
            <span className="tracking-wider font-bold text-transparent headline-outline"> Real Compliance</span></h1>
            <p className="serif text-3xl text-light italic text-left ">Compliance Beyond the Surface</p>
            <p className="text-light text-left  w-[80%] text-sm/8 mons-font ">
            From foundational privacy programs to advanced governance frameworks — OCEION delivers practical, legally-grounded, 
            and operationally embedded compliance solutions for startups, SMEs, and enterprises.
    </p>
    <div className="flex flex-col lg:flex-row justify-center items-start md:justify-start md:items-start gap-x-4 gap-y-4 box-border ">
        <button className="rounded-sm w-[80%] h-10 md:w-[40%] lg:h-12.5 tracking-widest 
         bg-bright text-white cursor-pointer transition-all border-bright
        shadow-xl hover:bg-mid hover:-translate-y-0.5 leading-normal px-5 uppercase text-sm " 
        onClick={()=>setIsModalOpen(true)} >Book a Consultation</button>
        <button className="rounded-sm px-5  tracking-widest 
        bg-transparent border border-bright text-bright md:w-[30%] lg:h-12.5  cursor-pointer
         hover:bg-light hover:text-white leading-normal w-[70%] h-10 uppercase text-sm">
            <Link href="#service-depth">Our Services</Link></button>
        </div>  
        </div>

        {/* Right Container */}
        <div className="hero-circles">
    <svg viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="210" cy="210" r="200" stroke="#378ADD" strokeWidth="0.5"/>
      <circle cx="210" cy="210" r="170" stroke="#185FA5" strokeWidth="0.4"/>
      <circle cx="210" cy="210" r="138" stroke="#378ADD" strokeWidth="0.3"/>
      <circle cx="210" cy="210" r="104" stroke="#185FA5" strokeWidth="0.5"/>
      <circle cx="210" cy="210" r="72" stroke="#378ADD" strokeWidth="0.6"/>
      <circle cx="210" cy="210" r="40" stroke="#85B7EB" strokeWidth="0.8"/>
      <path d="M140 210 Q175 172 210 170 Q245 172 280 210 Q245 248 210 250 Q175 248 140 210Z" stroke="#85B7EB" strokeWidth="0.7" fill="rgba(55,138,221,0.05)"/>
      <circle cx="210" cy="210" r="22" stroke="#85B7EB" strokeWidth="0.7"/>
      <circle cx="210" cy="210" r="10" fill="#378ADD" opacity="0.6"/>
      <line x1="210" y1="8" x2="210" y2="20" stroke="#378ADD" strokeWidth="1.2"/>
      <line x1="210" y1="400" x2="210" y2="412" stroke="#378ADD" strokeWidth="1.2"/>
      <line x1="8" y1="210" x2="20" y2="210" stroke="#378ADD" strokeWidth="1.2"/>
      <line x1="400" y1="210" x2="412" y2="210" stroke="#378ADD" strokeWidth="1.2"/>
    </svg>
  </div>

    </div>

    {/* SVG Waves at the bottom */}
    <div className="hidden lg:block lg:absolute bottom-0 left-0 w-screen leading-0 z-10 pointer-events-none 
    overflow-hidden ">
       {/* Insert your overlapping SVGs here */}
           <div className="wave-right "> 
                <svg className="wave-layer-2 drop-shadow-[0_-15px_15px_rgba(0,0,0,0.4)]" viewBox="0 0 1140 200" preserveAspectRatio="none">
                    <path d="M0,120 C360,60 720,180 1080,80 C1260,40 1380,120 1440,100 L1440,200 L0,200 Z" fill="#042C53">    
                    </path>
                </svg>
            </div>
    </div>
     <div className="hidden lg:block lg:absolute bottom-0 left-0 w-screen leading-0 z-10 pointer-events-none ">
        <div className="wave-left ">
            <svg className="wave-layer drop-shadow-[0_-15px_20px_rgba(0,0,0,0.4)]" viewBox="0 0 1140 200" preserveAspectRatio="none">
                <path d="M0,100 C240,160 480,40 720,100 C960,160 1200,40 1440,100 L1440,200 L0,200 Z" opacity="0.5" fill="#042C53">
                </path>
            </svg>
           </div>
    </div>
            <div className=" lg:relative lg:left-[25%] lg:top-[20%] leading-0 z-40 pointer-events-none 
            overflow-x-hidden ">
                <div className="flex mons-font gap-y-2 gap-x-8 md:gap-x-25 justify-center">
                    <div className="flex flex-col items-center">
                        <p className="text-4xl font-bold spaced">100<span className="text-bright text-xl">+</span></p>
                        <p className="text-bright text-sm italic">Clients</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-4xl font-bold spaced">100<span className="text-bright text-xl">+</span></p>
                        <p className="text-bright text-sm italic">Jurisdictions</p>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-4xl font-bold spaced">98%<span className="text-bright text-xl">+</span></p>
                        <p className="text-bright text-sm italic">Compliance Rate</p>
                    </div>
                </div>
            </div>
</div>

        

        </>
    );
}

export default Hero;