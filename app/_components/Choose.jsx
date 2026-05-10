import React from "react";

const Choose = () => {

    return (

        <>
        <div className="flex flex-col flex-wrap py-10 pl-5 md:pl-8 md:pd-10 md:pt-20 justify-start items-start 
        mons-font gap-y-3 md:gap-y-4 text-black w-full md:w-[80%] md:justify-center mx-auto">
            <p className="text-sm text-bright uppercase spacing text-start">- Why Choose Us</p>
            <h1 className="text-5xl font-bold text-start ">
               <span className="text-bright"> OCEION </span> vs the Alternatives 
            </h1>
            <p className="text-sm/8  text-start text-slate-600 w-[90%] md:w-[80%]">
                    Not all compliance support is equal. 
                    Here is what separates a specialist privacy firm from a generalist consultancy or a solo contractor.
                </p>
        </div>
        
<p className="text-sm text-right text-slate-500 italic animate-pulse lg:hidden pb-4 w-[70%] mx-auto">Scroll Right for Table</p>
<div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default w-[80%] 
mx-auto mb-10">
    
    <table className="w-full text-sm text-left rtl:text-right text-black mons-font overflow-auto">
        <thead className="text-sm text-slate-500 border-b-2 border-slate-400 uppercase font-bold text-left">
            <tr className="text-left">
                <th scope="col" className="px-4 py-3 font-medium">
                    Capability
                </th>
                <th scope="col" className="px-4 py-3 text-bright text-lg font-medium bg-blue-300 border-b-4  border-bright">
                    Oceion
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                    Large generalist Firm
                </th>
                <th scope="col" className="px-4 py-3 font-medium">
                    solo consultant
                </th>
            </tr>
        </thead>
        <tbody className="text-sm">
            <tr className=" border-b border-slate-300 hover:bg-slate-100 rounded-md">
                <th scope="row" className="px-6 py-4  text-heading whitespace-nowrap">
                    Bespoke vs template approach
                </th>
                <td className="px-6 py-4">
                    <span className="text-green-500 text-lg">✓</span> Fully bespoke
                </td>
                <td className="px-6 py-4 text-red-400">
                    ~ Standardised playbooks
                </td>
                <td className="px-6 py-4 text-red-400">
                    ~ Variable
                </td>
            </tr>
            <tr className=" border-b border-slate-300 hover:bg-slate-100 rounded-md">
                <th scope="row" className="px-6 py-4  text-heading whitespace-nowrap">
                    Multi-jurisdiction coverage
                </th>
                <td className="px-6 py-4">
                    <span className="text-green-500 text-lg">✓</span> 15+ jurisdictions
                </td>
                <td className="px-6 py-4">
                    <span className="text-green-500 text-lg">✓</span> Global (diluted)
                </td>
                <td className="px-6 py-4">
                   <span className="text-red-500">✗</span> Usually 1-2
                </td>

            </tr>
            <tr className="border-b border-slate-300 hover:bg-slate-100 rounded-md">
                <th scope="row" className="px-6 py-4 text-heading whitespace-nowrap">
                   Legal + Technical + Operational
                </th>
                <td className="px-6 py-4">
                    	<span className="text-green-500 text-lg">✓</span> Fully integrated
                </td>
                <td className="px-6 py-4 text-red-400">
                    ~ Fragmented teams
                </td>
                <td className="px-6 py-4">
                    <span className="text-red-500">✗</span>Legal-only typical
                </td>
            </tr>
            	
            <tr className="border-b border-slate-300 hover:bg-slate-100 rounded-md">
                <th scope="row" className="px-6 py-4 text-heading whitespace-nowrap">
                  DPO-as-a-Service (named DPO)
                </th>
                <td className="px-6 py-4">
                    	<span className="text-green-500 text-lg">✓</span> Named individual
                </td>
                <td className="px-6 py-4 text-red-400" >
                   ~ Shared resource
                </td>
                <td className="px-6 py-4 text-red-400">
                    ~ Informal
                </td>
            </tr>
          
            <tr className="border-b border-slate-300 hover:bg-slate-100 rounded-md">
                <th scope="row" className="px-6 py-4 text-heading whitespace-nowrap">
                  AI & Emerging Tech advisory
                </th>
                <td className="px-6 py-4">
                    	<span className="text-green-500 text-lg">✓</span> EU AI Act ready
                </td>
                <td className="px-6 py-4 text-red-400">
                   ~ Developing
                </td>
                <td className="px-6 py-4">
                    <span className="text-red-500">✗</span> Rarely
                </td>
            </tr>
            <tr className="border-b border-slate-300 hover:bg-slate-100 rounded-md">
                <th scope="row" className="px-6 py-4 text-heading whitespace-nowrap">
                  24/7 breach response
                </th>
                <td className="px-6 py-4">
                    	<span className="text-green-500 text-lg">✓</span>  Dedicated line
                </td>
                <td className="px-6 py-4 text-red-400">
                   ~ SLA-gated	
                </td>
                <td className="px-6 py-4">
                    <span className="text-red-500">✗</span> Best-effort
                </td>
            </tr>
            			
            <tr className="border-b border-slate-300 hover:bg-slate-100 rounded-md">
                <th scope="row" className="px-6 py-4 text-heading whitespace-nowrap">
                  Startup & SME accessibility
                </th>
                <td className="px-6 py-4">
                    	<span className="text-green-500 text-lg">✓</span> Scalable retainers
                </td>
                <td className="px-6 py-4">
                   <span className="text-red-400">✗</span> Enterprise-priced
                </td>
                <td className="px-6 py-4">
                    <span className="text-green-500 text-lg">✓</span> Affordable
                </td>
            </tr>
            			
            <tr className="border-b border-slate-300 hover:bg-slate-100 rounded-md">
                <th scope="row" className="px-6 py-4 text-heading whitespace-nowrap">
                  India DPDP Act 2023 specialist
                </th>
                <td className="px-6 py-4">
                    	<span className="text-green-500 text-lg">✓</span> Deep expertise
                </td>
                <td className="px-6 py-4 text-red-400">
                   ~ Generalist coverage
                </td>
                <td className="px-6 py-4 text-red-400">
                    ~ Variable
                </td>
            </tr>		
        </tbody>
    </table>
</div>

        
        </>
    )
}

export default Choose