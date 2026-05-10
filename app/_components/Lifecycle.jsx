import React from 'react';

 const Lifecycle = () =>  {

  return (
        <>    
    
    <div className="w-screen flex flex-col justify-center items-center bg-navy flex-wrap gap-y-6 py-10 md:py-30 
    ">  
        <h2 className="text-2xl text-bright font-bold spacing uppercase text-center">The oceion Compliance Lifecycle</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center bg-deep w-[90%] md:w-[80%] lg:w-[90%]">
        <div className="flex flex-col md:flex-row justify-center items-center relative py-2 hover:bg-navy">
            <div className="py-5 flex flex-col justify-center items-center gap-y-2 border-b lg:border-b-0
             border-b-light lg:border-r lg:border-r-bright ">
                <p className="h-10 w-10 flex justify-center items-center text-base text-bright font-bold border
                 border-bright rounded-full"> 1</p>
                <h3 className="text-lg text-white font-bold"> Discovery</h3>
                <p className="text-light w-[80%] text-sm text-center">Core DP concepts, key definitions, and why data protection matters globally</p>
            </div>
            <p className="absolute right-[50%] bottom-0 rotate-90 lg:rotate-0 
            lg:right-0 lg:top-[40%] text-bold text-bright text-lg">&gt;</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center  relative py-2 hover:bg-navy">
            <div className=" py-5 flex flex-col justify-center items-center gap-y-2 border-b lg:border-b-0
            border-b-light lg:border-r lg:border-r-bright">
                <p className="h-10 w-10 flex justify-center items-center text-base text-bright font-bold border
                 border-bright rounded-full"> 2</p>
                <h3 className="text-lg text-white font-bold"> Regulations</h3>
                <p className="text-light w-[80%] text-sm text-center">
                    GDPR, DPDP Act 2023, PDPA — major frameworks with jurisdiction-specific study</p>
            </div>
            <p className="absolute right-[50%] bottom-0 rotate-90 lg:rotate-0 
            lg:right-0 lg:top-[40%] text-bold text-bright text-lg">&gt;</p>
        </div>
        <div className="flex flex-col md:flex-row justify-center items-center  relative py-2 hover:bg-navy">
            <div className="py-5 flex flex-col justify-center items-center gap-y-2 border-b lg:border-b-0
            border-b-light lg:border-r lg:border-r-bright ">
                <p className="h-10 w-10 flex justify-center items-center text-base text-bright font-bold border
                 border-bright rounded-full"> 3</p>
                <h3 className="text-lg text-white font-bold"> Legal Skills</h3>
                <p className="text-light w-[80%] text-sm text-center">
                   Policy drafting, RoPA, lawful basis assessment, and consent management practice</p>
            </div>
            <p className="absolute right-[50%] bottom-0 rotate-90 lg:rotate-0 
            lg:right-0 lg:top-[40%] text-bold text-bright text-lg">&gt;</p>
        </div>
              <div className="flex flex-col md:flex-row justify-center items-center  relative py-2 hover:bg-navy">
            <div className="py-5 flex flex-col justify-center items-center gap-y-2 border-b lg:border-b-0
            border-b-light lg:border-r lg:border-r-bright-r border-r-bright ">
                <p className="h-10 w-10 flex justify-center items-center text-base text-bright font-bold border
                 border-bright rounded-full"> 4</p>
                <h3 className="text-lg text-white font-bold"> Specialism</h3>
                <p className="text-light w-[80%] text-sm text-center">
                    Choose: AI & technology, cross-border transfers, breach response, or impact assessments</p>
            </div>
            <p className="absolute right-[50%] bottom-0 rotate-90 lg:rotate-0 
            lg:right-0 lg:top-[40%] text-bold text-bright text-lg">&gt;</p>
        </div>
         <div className="flex flex-col md:flex-row justify-center items-center  relative py-2 hover:bg-navy">
            <div className="py-5  flex flex-col justify-center items-center gap-y-2  ">
                <p className="h-10 w-10 flex justify-center items-center text-base text-bright font-bold border
                 border-bright rounded-full"> 5</p>
                <h3 className="text-lg text-white font-bold"> Certification</h3>
                <p className="text-light w-[80%] text-sm text-center">
                    OCEION Certificate of Privacy Competence — recognised by employers and practitioners</p>
            </div>
        </div>
        </div>
    </div>





        </>
)
}
export default Lifecycle;