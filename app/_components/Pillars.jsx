import React from 'react';
import { IoTelescopeOutline } from "react-icons/io5";
import { BsGlobe } from "react-icons/bs";
import { CiSettings } from "react-icons/ci";
import { FaRegHandshake } from "react-icons/fa";
 const Pillars = () =>  {

  return (
        <>    
    
    <div className="w-screen flex flex-col justify-center items-center bg-navy flex-wrap gap-y-6 py-20 
    border border-bright"> 
        <p className="text-bright text-center spacing uppercase">- Why Oceion</p> 
        <h2 className="text-5xl text-bright font-bold  uppercase text-center"><span className="text-white">Built on </span>
        Four Pillars</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center  w-[90%] md:w-[80%] lg:w-[90%] gap-1">
        <div className="flex flex-col md:flex-row justify-center items-center relative py-2 max-w-125 hover:bg-deep">
            <div className="py-5 flex flex-col justify-center items-center gap-y-2 border border-deep ">
                <p className="h-15 w-15 flex justify-center items-center text-xl text-bright border
                 border-deep rounded-full"> <IoTelescopeOutline/></p>
                <h3 className="text-lg text-white font-bold"> Deep Expertise</h3>
                <p className="text-light w-[80%] text-sm text-center">
                   Multi-disciplinary team combining legal, technical, and organizational knowledge.</p>
            </div>
        </div>
         <div className="flex flex-col md:flex-row justify-center items-center relative py-2 max-w-125 hover:bg-deep">
            <div className="py-5 flex flex-col justify-center items-center gap-y-2 border border-deep ">
                <p className="h-15 w-15 flex justify-center items-center text-xl text-bright border
                 border-deep rounded-full"> <BsGlobe/></p>
                <h3 className="text-lg text-white font-bold"> Global Reach</h3>
                <p className="text-light w-[80%] text-sm text-center">
                   Advisory experience spanning 15+ regulatory jurisdictions across Asia, Europe & beyond.</p>
            </div>
        </div>
         <div className="flex flex-col md:flex-row justify-center items-center relative py-2 max-w-125 hover:bg-deep" >
            <div className="py-5 flex flex-col justify-center items-center gap-y-2 border border-deep ">
                <p className="h-15 w-15 flex justify-center items-center text-xl text-bright border
                 border-deep rounded-full"> <CiSettings/></p>
                <h3 className="text-lg text-white font-bold"> Practical Approach</h3>
                <p className="text-light w-[80%] text-sm text-center">
                   We don't just advise — we implement. Compliance that works in the real world.</p>
            </div>
        </div>
         <div className="flex flex-col md:flex-row justify-center items-center relative py-2 max-w-125 hover:bg-deep" >
            <div className="py-5 flex flex-col justify-center items-center gap-y-2 border border-deep ">
                <p className="h-15 w-15 flex justify-center items-center text-xl text-bright border
                 border-deep rounded-full"> <FaRegHandshake/></p>
                <h3 className="text-lg text-white font-bold"> Trusted Partner</h3>
                <p className="text-light w-[80%] text-sm text-center">
                   Long-term relationships built on integrity, transparency, and measurable outcomes.</p>
            </div>
        </div>
        
        </div>
    </div>





        </>
)
}
export default Pillars;