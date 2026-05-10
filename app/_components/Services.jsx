import React from "react";
import Link from "next/link";
import { FaLock } from "react-icons/fa6";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { FaBalanceScale } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { LuSearchCheck } from "react-icons/lu";

const Services = () => {

    return(
        <>
        <div className="flex flex-col flex-wrap py-10 pl-5 md:px-2 md:pd-10 md:pt-20 justify-start items-start 
        mons-font gap-y-3 md:gap-y-5 text-black w-[90%] md:w-[90%] md:justify-center mx-auto" id="service-section">
         
             <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-sky-500 shrink-0" />
            <span className="text-xs font-semibold tracking-widest 
              text-element text-bright text-[12px] uppercase spacing text-left text-element">
             What we do
            </span>
          </div>
            <h1 className="text-5xl font-bold text-start ">
                Our Core <span className="text-bright"> Services</span>
            </h1>
            <p className="text-sm/8  text-start text-slate-600 w-[90%] md:w-[60%]">
                    From policy drafting to full-scale compliance programs — OCEION
                     delivers end-to-end privacy and governance solutions.
                </p>
        </div>
        <div className="flex flex-col md:flex-row py-5 justify-center items-center flex-wrap gap-2 p-3">
            <div className="flex flex-col gap-y-3 justify-start items-start border border-blue-200 p-6 
            rounded-md  w-[90%] md:w-[35vw] lg:w-[30vw] hover:bg-blue-100">
                <p className="group-hover:border-slate-500 border border-slate-400 rounded-full text-lg p-2">
                    <IoShieldCheckmark className="w-10 h-10 text-blue-500"/>
                </p>
                <p className="text-base font-bold text-slate-700 group-hover:text-slate-500">
                    Data Privacy & Protection
                </p>
                <p className="text-sm  text-slate-500 group-hover:text-slate-700">
                    GDPR, PDPA, and global privacy framework compliance tailored to your organization's risk profile
                </p>
                <p className="text-bright text-lg italics cursor-pointer hover:text-blue-800 hover:underline"><Link href="/services">Learn More 
                <FaArrowAltCircleRight className="inline"/> </Link></p>
            </div>
            <div className="group flex flex-col gap-y-3 justify-start items-start border border-blue-200 p-6 
            rounded-md  w-[90%] md:w-[35vw] lg:w-[30vw] hover:bg-blue-100">
                <p className="group-hover:border-slate-500 border border-slate-400 rounded-full text-lg p-2">
                    <FaLock className="w-10 h-10 text-yellow-500"/>
                </p>
                <p className="text-base font-bold text-slate-700 group-hover:text-slate-500">
                    Information Security
                </p>
                <p className="text-sm  text-slate-500 group-hover:text-slate-700">
                    ISO 27001 alignment, security governance frameworks, and incident response planning.
                </p>
                <p className="text-bright text-lg italics cursor-pointer hover:text-blue-800 hover:underline"><Link href="/services">Learn More <FaArrowAltCircleRight className="inline"/> </Link></p>
            </div>
            <div className="group  flex flex-col gap-y-3 justify-start items-start border border-blue-200 p-6 
            rounded-md  w-[90%] md:w-[35vw] lg:w-[30vw] hover:bg-blue-100">
                <p className="group-hover:border-slate-500 border border-slate-400 rounded-full text-lg p-2">
                    <FaBalanceScale className="w-10 h-10 text-slate-700"/>
                </p>
                <p className="text-base font-bold text-slate-700 group-hover:text-slate-500">
                   Regulatory Compliance
                </p>
                <p className="text-sm  text-slate-500 group-hover:text-slate-700">
                    Navigate complex regulatory landscapes across multiple jurisdictions with confidence.
                </p>
                <p className="text-bright text-lg italics cursor-pointer hover:text-blue-800 hover:underline"><Link href="/services">Learn More <FaArrowAltCircleRight className="inline"/> </Link></p>
            </div>
            <div className="group  flex flex-col gap-y-3 justify-start items-start border border-blue-200 p-6 
            rounded-md  w-[90%] md:w-[35vw] lg:w-[30vw] hover:bg-blue-100">
                <p className="group-hover:border-slate-500 border border-slate-400 rounded-full text-lg p-2">
                    <LuSearchCheck className="w-10 h-10 text-green-500"/>
                </p>
                <p className="text-base font-bold text-slate-700 group-hover:text-slate-500">
                    Risk Assessment & Audits
                </p>
                <p className="text-sm  text-slate-500 group-hover:text-slate-700">
                    Comprehensive Data Protection Impact Assessments and third-party vendor audits.
                </p>
                <p className="text-bright text-lg italics cursor-pointer hover:text-blue-800 hover:underline"><Link href="/services">Learn More <FaArrowAltCircleRight className="inline"/> </Link></p>
            </div>
            <div className=" group  flex flex-col gap-y-3 justify-start items-start border border-blue-200 p-6 
            rounded-md  w-[90%] md:w-[35vw] lg:w-[30vw] hover:bg-blue-100">
                <p className="group-hover:border-slate-500 border border-slate-400 rounded-full text-lg p-2">
                    <HiOutlineClipboardDocumentCheck className="w-10 h-10 text-slate-600"/>
                </p>
                <p className="text-base font-bold text-slate-700 group-hover:text-slate-500">
                    Policy & Documentation
                </p>
                <p className="text-sm  text-slate-500 group-hover:text-slate-700">
                   Legally sound privacy policies, data processing agreements, and consent frameworks.
                </p>
                <p className="text-bright text-lg italics cursor-pointer hover:text-blue-800 hover:underline"><Link href="/services">Learn More <FaArrowAltCircleRight className="inline"/> </Link></p>
            </div>
            <div className=" group  flex flex-col gap-y-3 justify-start items-start border border-blue-200 p-6 
            rounded-md  w-[90%] md:w-[35vw] lg:w-[30vw] hover:bg-blue-100">
                <p className="group-hover:border-slate-500 border border-slate-400 rounded-full text-lg p-2">
                    <SiTicktick className="w-10 h-10 text-blue-500"/>
                </p>
                <p className="text-base font-bold text-slate-700 group-hover:text-slate-500">
                    Training & Education
                </p>
                <p className="text-sm  text-slate-500 group-hover:text-slate-700">
                    Certified courses, workshops, and corporate training programs on privacy and governance.
                </p>
                <p className="text-bright text-lg italics cursor-pointer hover:text-blue-800 hover:underline"><Link href="/services">Learn More <FaArrowAltCircleRight className="inline"/> </Link></p>
            </div>
            
        </div>
        
        </>
    )
}

export default Services;