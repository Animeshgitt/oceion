import React from 'react';
import Image from 'next/image';
const About = () => {

    return (
        <>
        <div className="w-screen bg-[#F4F8FD] pb-8 scroll-mt-[30px]" id="#about-section">
        <div className="w-screen pl-5 md:pl-0 md:w-[90vw] mons-font mx-auto flex flex-col lg:flex-row justify-center 
        items-center gap-x-8 pt-10 lg:pt-16 md:pt-20 pb-10 relative text-slate-800 bg-[#F4F8FD] gap-y-4 flex-wrap">


            {/* right div */}
            <div className="w-full md:w-[40%]  relative pb-10 md:pb-0 overflow-hidden">
                <div className="relative about-circle">
                    <svg className="about-emblem " viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="160" cy="160" r="148" stroke="#185FA5" strokeWidth="1.2"/>
        <circle cx="160" cy="160" r="130" stroke="#378ADD" strokeWidth="0.5" opacity="0.4"/>
        <circle cx="160" cy="160" r="110" stroke="#0C447C" strokeWidth="0.4" opacity="0.3"/>
        <circle cx="160" cy="160" r="88" stroke="#185FA5" strokeWidth="0.5"/>
        <circle cx="160" cy="160" r="68" fill="#E6F1FB" opacity="0.3" stroke="#378ADD" strokeWidth="0.6"/>
  
        <path d="M100 160 Q130 128 160 126 Q190 128 220 160 Q190 192 160 194 Q130 192 100 160Z" fill="#E6F1FB" opacity="0.4" stroke="#185FA5" strokeWidth="0.8"/>
        <circle cx="160" cy="160" r="22" stroke="#185FA5" strokeWidth="1"/>
        <circle cx="160" cy="160" r="12" fill="#185FA5" opacity="0.8"/>
        <circle cx="165" cy="155" r="4" fill="white" opacity="0.9"/>

        <ellipse cx="146" cy="160" rx="48" ry="80" stroke="#185FA5" strokeWidth="0.4" opacity="0.25"/>
        <ellipse cx="174" cy="160" rx="48" ry="80" stroke="#185FA5" strokeWidth="0.4" opacity="0.25"/>

        <line x1="160" y1="10" x2="160" y2="24" stroke="#378ADD" strokeWidth="2" stroke-linecap="round"/>
        <line x1="160" y1="296" x2="160" y2="310" stroke="#378ADD" strokeWidth="2" stroke-linecap="round"/>
        <line x1="10" y1="160" x2="24" y2="160" stroke="#378ADD" strokeWidth="2" stroke-linecap="round"/>
        <line x1="296" y1="160" x2="310" y2="160" stroke="#378ADD" strokeWidth="2" stroke-linecap="round"/>
        <path d="M55 185 Q95 175 130 185 Q165 195 205 185 Q230 180 265 185" stroke="#378ADD" strokeWidth="0.7" fill="none" opacity="0.5"/>
        <path d="M55 195 Q100 188 140 196 Q180 204 220 195 Q248 189 265 195" stroke="#85B7EB" strokeWidth="0.5" fill="none" opacity="0.35"/>
                    </svg>
                    <Image src="/logo.png" alt="Oceion Logo" width={400} height={400} className="absolute top-[1%] max-width-[400px] 
                    animate-[spin_9s_ease_infinite] overflow-hidden" />
                </div>
                <div className="bg-navy text-bright w-[180px] text-4xl/5 absolute left-[50%] md:left-[65%] 
                bottom-[5%] px-3 md:px-4 py-6 md:py-8 rounded-md font-bold"> 
                    10+  <br/>
                <span className="text-bright text-base font-normal uppercase" >Years Expertise</span> </div>
            </div>
            {/* left div */}


            <div className="w-full md:w-[100%] lg:w-[50%] flex flex-col gap-y-6 justify-start items-start relative md:pt-10 lg:pt-0">
               
                  <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-sky-500 shrink-0" />
            <span className="text-xs font-semibold tracking-widest 
              text-element text-bright text-[12px] uppercase spacing text-left text-element">
              About Oceion
            </span>
          </div>
                <h1 className="text-5xl font-bold text-start">
                    Not Another
                    <span className="text-bright"> Cookie-Clutter </span>
                     Consultancy

                </h1>
                <p className="text-sm/8  text-start text-slate-600 w-[90%] md:w-[90%]">
                    Most consultancies give you templates. We give you compliance. There is a significant 
                    difference between an organisation that has privacy documentation and one that is genuinely compliant — we build the latter.
                </p>
                <p className="text-sm/8 text-start text-slate-600 w-[90%] md:w-[90%]">
                    Founded by practitioners with experience across the UK, EU, US, and Asia-Pacific regulatory environments, OCEION combines legal precision, 
                    technical depth, and operational practicality to deliver compliance that actually holds under scrutiny.
                </p>
                <ul className="text-sm/8 text-start text-slate-800 w-[90%] md:w-[90%] list-style-tick pl-4">
                <li className="pl-1 ">Bespoke solutions tailored to your business model, sector, and risk profile — not generic templates</li>
                <li className="pl-1 ">Multi-disciplinary team: legal consultants, privacy architects, and technical operators working in unison</li>
                <li className="pl-1 ">Full-lifecycle coverage — from discovery and design through to implementation and ongoing compliance</li>
                <li className="pl-1 ">24/7 breach response and dedicated account access — not a shared helpdesk</li>
                </ul>
               

            </div>
        
        </div>
         <div className="flex flex-col md:flex-row gap-x-6 gap-y-4 justify-center items-center flex-wrap">
                    <div className="hover:bg-blue-100  border border-light border-l-5 border-l-blue-500 w-[90%] md:w-[80%] px-5 py-5 rounded-md">
                        <p className="text-xl text-bright pb-5 uppercase"> VISION</p>
                        <p className=" text-base text-slate-500">A world where privacy is not a burden but a competitive advantage.</p>
                    </div>
                    <div className="hover:bg-blue-100  border border-blue-200 border-l-5 border-l-blue-500 w-[90%] md:w-[80%] px-5 py-5 rounded-md">
                        <p className="text-xl text-bright pb-5 uppercase"> Mission</p>
                        <p className="text-base text-slate-500">To make compliance accessible, strategic, and enduring for every organization.</p>
                    </div>
        </div>
        </div>
        </>

    )
}

export default About;