// import { FaLock } from "react-icons/fa6";
// import { HiOutlineClipboardDocumentCheck } from "react-icons/hi2";
// import { FaBalanceScale } from "react-icons/fa";
// import { IoShieldCheckmark } from "react-icons/io5";
// import { SiTicktick } from "react-icons/si";

import { BsCurrencyEuro } from "react-icons/bs";
import { PiCurrencyInr } from "react-icons/pi";
import { MdCurrencyPound } from "react-icons/md";
import { BsCurrencyDollar } from "react-icons/bs";
import { TbCurrencyDollarSingapore } from "react-icons/tb";
import { TbWorldCheck } from "react-icons/tb";
const Features = () => {

    return (
        <>
        <div className="bg-navy w-full flex lg:flex-row gap-x-8 gap-y-6 md:gap-y-2 lg:gap-y-8 
        uppercase justify-center items-center py-4 
         text-light text-sm mons-font mons-font lg:py-4 flex-wrap" >
              <div className="flex justify-center items-center gap-x-2">
            <div className="text-lg text-light italic"> <PiCurrencyInr className="text-green-600 inline-block text-xl"/>IN </div>
            <div className="flex flex-col text-xs justify-center items-center">
                    <h2 className="text-bright font-bold uppercase less-spacing">India dpdp act 2023</h2>
                    <p className="text-slate-500 italic">Digital Personal Data Protection</p>
            </div>
         </div>
         <div className="flex justify-center items-center gap-x-2">
            <div className="text-lg text-light italic"> <BsCurrencyEuro className="text-green-600 inline-block text-xl"/>EU </div>
            <div className="flex flex-col text-xs justify-center items-center">
                    <h2 className="text-bright font-bold uppercase less-spacing">EU gdpr</h2>
                    <p className="text-slate-500 italic">General Data Protection Regulation</p>
            </div>
         </div>
         <div className="flex justify-center items-center gap-x-2">
            <div className="text-lg text-light italic"> <MdCurrencyPound className="text-green-600 inline-block text-xl"/>GB </div>
            <div className="flex flex-col text-xs justify-center items-center">
                    <h2 className="text-bright font-bold uppercase less-spacing">Uk gdpr/dpa 2018</h2>
                    <p className="text-slate-500 italic">ICO Regulated Compliance</p>
            </div>
         </div>
         <div className="flex justify-center items-center gap-x-2">
            <div className="text-lg text-light italic"> <BsCurrencyDollar className="text-green-600 inline-block text-xl"/>US </div>
            <div className="flex flex-col text-xs justify-center items-center">
                    <h2 className="text-bright font-bold uppercase less-spacing">CCPA/CPRA</h2>
                    <p className="text-slate-500 italic">California Privacy Rights Act</p>
            </div>
         </div>
         <div className="flex justify-center items-center gap-x-2">
            <div className="text-lg text-light italic"> <TbCurrencyDollarSingapore className="text-green-600 inline-block text-xl "/> SG </div>
            <div className="flex flex-col text-xs justify-center items-center">
                    <h2 className="text-bright font-bold uppercase less-spacing">Singapore pdpa</h2>
                    <p className="text-slate-500 italic">Personal Data Protection Act</p>
            </div>
         </div>
         <div className="flex justify-center items-center gap-x-2">
            <div className="text-lg text-light italic"> <TbWorldCheck className="text-green-600 inline-block text-xl"/> </div>
            <div className="flex flex-col text-xs justify-center items-center">
                    <h2 className="text-bright font-bold uppercase less-spacing">eu ai act</h2>
                    <p className="text-slate-500 italic">Artificial Intelligence Regulation</p>
            </div>
         </div>
            {/* <h2 className=" py-1 md:py-0 text-sm">
                    <HiOutlineClipboardDocumentCheck  className="text-blue-500 inline-block text-lg m-2"/>
                    ISO 27001 Aligned
            </h2>
            <h2 className="py-1 md:py-0 text-sm">
                    <FaBalanceScale className="text-white inline-block text-xl m-2"/>
                    Legal-Grade Advisory
            </h2>
            <h2 className="py-1 md:py-0 text-sm">
                    <IoShieldCheckmark  className="text-black inline-block text-xl m-2"/>
                    End-to-End Protection
            </h2>
            <h2 className="py-1 md:py-0 text-sm">
                  <SiTicktick className="text-green-500 inline-block text-xl m-2"/>
                    Certified Trainers
            </h2> */}
        </div>
        </>
    )
}

export default Features;