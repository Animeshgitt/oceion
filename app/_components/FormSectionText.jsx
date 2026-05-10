import React from "react";
import Image from "next/image";

import { MdMarkEmailUnread } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { MdElectricBolt } from "react-icons/md";
const FormSection =() =>{

    return(

        <>
        <div className="flex flex-col mons-font items-center justify-center w-full lg:w-[40%] my-5" id="form-section">
        <div className="flex flex-col justify-start  
         items-start md:w-[80%] w-[90%]
        mons-font gap-y-2 md:gap-y-4 text-black  ">
            <p className="text-sm text-bright uppercase spacing text-start">- Get in Touch</p>
            <h1 className="text-5xl font-bold text-start ">
                Start Your <span className="text-bright"> Compliance </span> Journey Today  
            </h1>
            <p className="text-sm/8  text-start text-slate-600 w-[90%] md:w-[80%]">
                   Book a complimentary 30-minute discovery call. No commitment — just a clear, 
                   expert view of your current compliance posture and what you need to do next.
                </p>
        </div>
        <div className="flex flex-col justify-start items-start w-[70%]">
            <div className="flex flex-row justify-start items-center border-b border-b-slate-400 w-full py-5">
                <p className="border border-slate-400 rounded-full text-lg p-2">
                                    <MdMarkEmailUnread className="w-10 h-10 text-blue-500"/>
                </p>
                <div className="flex flex-col gap-y-1 justify-start items-start ml-3">
                    <p className="text-sm text-bright font-bold less-spacing uppercase">Email us at</p>
                    <p className="text-sm text-slate-700 text-start">hr@oceion.co<br/>
                        info@oceion.com<br/>
                         advisory@oceion.co<br/>
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center border-b border-b-slate-400 w-full py-3">
                <p className="border border-slate-400 rounded-full text-lg p-2">
                                    <IoCall className="w-10 h-10 text-blue-500"/>
                </p>
                <div className="flex flex-col gap-y-1 justify-start items-start ml-3">
                    <p className="text-sm text-bright font-bold less-spacinguppercase">Call us at</p>
                    <p className="text-sm text-slate-700 text-start">+919191919100<br/>
                        Monday - friday<br/>
                         9 AM - 7 PM<br/>
                    </p>
                </div>
            </div>
              <div className="flex flex-row justify-start items-center border-b border-b-slate-400 w-full py-3">
                <p className="border border-slate-400 rounded-full text-lg p-2">
                                    <FaLocationDot className="w-10 h-10 text-blue-500"/>
                </p>
                <div className="flex flex-col gap-y-1 justify-start items-start ml-3">
                    <p className="text-sm text-bright font-bold less-spacing uppercase">Location</p>
                    <p className="text-sm text-slate-700 text-start">New Delhi<br/>
                        Delhi , India <br/>
                         Advisory coverage: India · UK · EU · Singapore<br/>
                         <a href="#" className="text-bright">Open on Maps</a>
                    </p>
                </div>
            </div>
            <div className="flex flex-row justify-start items-center border-b border-b-slate-400 w-full py-3">
                <p className="border border-slate-400 rounded-full text-lg p-2">
                                    <MdElectricBolt className="w-10 h-10 text-blue-500"/>
                </p>
                <div className="flex flex-col gap-y-1 justify-start items-start ml-3">
                    <p className="text-sm text-bright font-bold less-spacing uppercase">Breach Emergency</p>
                    <p className="text-sm text-slate-700 text-start">24/7 incident response line<br/>
                        Available to all retained clients <br/>
                         
                    </p>
                </div>
            </div>
            
        </div>
        </div>
       
        
        </>
    )
}

export default FormSection;