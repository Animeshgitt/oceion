import React from "react";
import { FaLock } from "react-icons/fa6";
import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
import { FaBalanceScale } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import { SiTicktick } from "react-icons/si";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { LuSearchCheck } from "react-icons/lu";


import { MdRocketLaunch } from "react-icons/md";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { FaHospital } from "react-icons/fa";
import { BsBank2 } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";
import { MdOutlineShoppingCart } from "react-icons/md";
const Industries = () => {

    return(
        <>
        <div className="flex flex-col flex-wrap py-10 lg:pl-10 md:pd-10 md:pt-20 justify-start items-start 
        mons-font gap-y-3 md:gap-y-5 text-black  md:w-[80%] w-[90%] mx-auto">
             <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-sky-500 shrink-0" />
            <span className="text-xs font-semibold tracking-widest 
              text-element text-bright text-[12px] uppercase spacing text-left text-element">
               Sector Expertise
            </span>
          </div>
            <h1 className="text-5xl font-bold text-start ">
                Industries We <span className="text-bright"> Specialise </span> In 
            </h1>
            <p className="text-sm/8  text-start text-slate-600 w-[90%] md:w-[70%]">
                    Privacy obligations are not sector-neutral. We bring deep, 
                    sector-specific knowledge to every engagement — understanding the nuances that generic advisors miss.
                </p>
        </div>
        <div className="flex flex-col md:flex-row py-5 justify-center items-center flex-wrap gap-2 p-3 lg:w-[90%] mx-auto">
            <div className="flex flex-col gap-y-3 justify-start items-start border lg:border-r border-b border-blue-200 p-6 
            rounded-md  w-[95%] md:w-[450px]  relative hover:bg-blue-50">
                <p className=" text-lg p-1">
                    <MdRocketLaunch className="w-10 h-10 text-red-500"/>
                </p>
                <p className="text-base font-bold text-slate-700">
                    Startups & SMEs
                </p>
                <p className="text-sm  text-slate-500">
                   Privacy-by-design foundations, lean compliance programs, and scalable DPO services — built to grow with you from pre-seed to Series C.
                </p>
                <div className="text-slate-500 text-sm flex justify-start items-start gap-x-2 "> 
                    <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">DPDP </p>
                     <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md"> ActGDPRDPO </p>
                      <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">Service</p>
                </div>
                <p className="absolute text-xs right-5 top-5 text-bright font-bold bg-blue-50 uppercase">Startups</p>
            </div>
            <div className="flex flex-col gap-y-3 justify-start items-start border lg:border-r border-b border-blue-200 p-6 
            rounded-md  w-[95%] md:w-[450px] relative hover:bg-blue-50" >
                <p className=" text-lg p-1">
                    <HiBuildingOffice2 className="w-10 h-10 text-slate-500"/>
                </p>
                <p className="text-base font-bold text-slate-700">
                    Corporates & Enterprises
                </p>
                <p className="text-sm  text-slate-500">
                  Group-wide governance, DPO programmes, board-level advisory, 
                  and M&A due diligence for complex, multi-entity organisations.
                </p>
                <div className="text-slate-500 text-sm flex justify-start items-start gap-x-2 "> 
                    <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">ISO 27001 </p>
                     <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">M&A Diligence </p>
                      <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">Governance</p>
                </div>
                <p className="absolute text-xs right-5 top-5 text-bright font-bold bg-blue-50 uppercase">Enterprise</p>
            </div>
           <div className="flex flex-col gap-y-3 justify-start items-start border lg:border-r border-b border-blue-200 p-6 
            rounded-md  w-[95%] md:w-[450px] relative hover:bg-blue-50">
                <p className=" text-lg p-1">
                    <FaHospital className="w-10 h-10 text-blue-500"/>
                </p>
                <p className="text-base font-bold text-slate-700">
                   Healthcare & Pharma
                </p>
                <p className="text-sm  text-slate-500">
                  Patient data governance, clinical trial privacy, 
                  biometric compliance, and health data security for the sector's unique regulatory burden.
                </p>
                <div className="text-slate-500 text-sm flex justify-start items-start gap-x-2 "> 
                    <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">HIPAA</p>
                     <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">DPIA </p>
                      <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">Biometric</p>
                </div>
                <p className="absolute text-xs right-5 top-5 text-bright font-bold bg-blue-50 uppercase">Healthcare</p>
            </div>
            
          
           <div className="flex flex-col gap-y-3 justify-start items-start border lg:border-r border-b border-blue-200 p-6 
            rounded-md  w-[95%] md:w-[450px] relative hover:bg-blue-50">
                <p className=" text-lg p-1">
                    <BsBank2 className="w-10 h-10 text-blue-500"/>
                </p>
                <p className="text-base font-bold text-slate-700">
                    Fintech & Banking
                </p>
                <p className="text-sm  text-slate-500">
                  RBI data localisation, PCI-DSS alignment, AML data governance, 
                  and the compounded obligations of financial regulation and data law.
                </p>
                <div className="text-slate-500 text-sm flex justify-start items-start gap-x-2 "> 
                    <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">RBI</p>
                     <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">PCI-DSS </p>
                      <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">DPDP</p>
                </div>
                <p className="absolute text-xs right-5 top-5 text-bright font-bold bg-blue-50 uppercase">Finance</p>
            </div>
           <div className="flex flex-col gap-y-3 justify-start items-start border lg:border-r border-b border-blue-200 p-6 
            rounded-md  w-[95%] md:w-[450px] relative hover:bg-blue-50">
                <p className=" text-lg p-1">
                    <PiStudentFill className="w-10 h-10 text-green-500"/>
                </p>
                <p className="text-base font-bold text-slate-700">
                   EdTech & Education
                </p>
                <p className="text-sm  text-slate-500">
                  Student and child data protection, parental consent frameworks, 
                  and age-appropriate governance for digital learning platforms.
                </p>
                <div className="text-slate-500 text-sm flex justify-start items-start gap-x-2 "> 
                    <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">COPPA</p>
                     <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">FERPA </p>
                      <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">Child Data</p>
                </div>
                <p className="absolute text-xs right-5 top-5 text-bright font-bold bg-blue-50 uppercase">Edtech</p>
            </div>
            <div className="flex flex-col gap-y-3 justify-start items-start border lg:border-r border-b border-blue-200 p-6 
            rounded-md  w-[95%] md:w-[450px] relative hover:bg-blue-50">
                <p className=" text-lg p-1">
                    <MdOutlineShoppingCart className="w-10 h-10 text-yellow-400"/>
                </p>
                <p className="text-base font-bold text-slate-700">
                   E-commerce & Retail
                </p>
                <p className="text-sm  text-slate-500">
                  SCookie consent, marketing compliance, loyalty programme data governance, and consumer 
                  rights management for digital commerce.

                </p>
                <div className="text-slate-500 text-sm flex justify-start items-start gap-x-2 "> 
                    <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">CCPA </p>
                     <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">FCookie </p>
                      <p className=" border border-slate-400 px-1 bg-slate-100 rounded-md">LawMarketing</p>
                </div>
                <p className="absolute text-xs right-5 top-5 text-bright font-bold bg-blue-50 uppercase"> Retail</p>
            </div>
            
        </div>
        
        </>
    )
}

export default Industries;