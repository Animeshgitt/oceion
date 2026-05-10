
import { FaQuoteLeft } from "react-icons/fa";
const Philosophy = () => {
    return (

        <>
        <div className="w-full bg-blue-50 flex flex-col md:flex-row justify-center items-center gap-x-20 gap-y-10 
        py-20 px-5 md:px-10 lg:px-20">


            {/* left */}

            <div className=" bg-navy rounded-md flex flex-col p-5 md:w-1/2">
                    <FaQuoteLeft className="text-4xl text-bright opacity-70 ml-5"/>
                    <p className="text-2xl serif italic text-white">
                            Compliance is not a document. It is not a policy folder, 
                            a checkbox, or a single annual review. It is a living practice — 
                            one that must be woven into how your organisation 
                            thinks, decides, and behaves every single day.</p>
                    <div className="text-lg text-bright">
                        <div className="flex items-center justify-start gap-3 my-4">
                                <span className="w-6 h-px bg-sky-500 shrink-0" />
                                <span className=" font-semibold 
                                  uppercase spacing text-left ">
                                OCEION ADVISORY TEAM
                                </span>
                            </div>
                    </div>  
                    <div className="flex flex-col justify-start items-start gap-y-1">
                                <div class="progress w-0 bg-blue-100" role="progressbar" aria-label="0% Progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar w-0"></div>
                                </div>
                                <div class="progress w-1/4 bg-blue-200" role="progressbar" aria-label="25% Progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar w-1/4"></div>
                                </div>
                                <div class="progress w-1/2 bg-blue-400" role="progressbar" aria-label="50% Progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar w-1/2"></div>
                                </div>
                                <div class="progress w-3/4 bg-blue-600" role="progressbar" aria-label="75% Progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar w-3/4"></div>
                                </div>
                                <div class="progress w-full bg-deep" role="progressbar" aria-label="100% Progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                <div class="progress-bar w-full"></div>
                                </div>
                        </div>  
                        <p className="text-slate-300 text-base italic">The layers of genuine compliance — each one deeper than the last.</p>    
            </div>
            {/* right */}
            <div className="flex flex-col">
                <div className="flex flex-col justify-center items-center text-start mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-6 h-px bg-sky-500 shrink-0" />
            <span className="text-xs font-semibold tracking-widest uppercase text-sky-500">
              Our philosophy
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 leading-tight">
            Why <span className="text-sky-500">Depth</span> Matters{' '}
            
          </h2>
          <p className="mt-4 text-base text-slate-500 max-w-3xl leading-relaxed">
            Most consultancies offer advice. We offer architecture. There is a meaningful difference between an organisation that has privacy documentation and one that is genuinely compliant — 
            and that difference becomes apparent the moment a regulator arrives, a breach occurs, or an investor conducts due diligence.
          </p>
          <p className="mt-4 text-base text-slate-500 max-w-3xl leading-relaxed">
            We founded OCEION because we saw too many organisations placing surface-level compliance — policies without
             processes, notices without understanding, audits without action — and calling it done. We knew there was a better way.
            </p>
            <p className="mt-4 text-base text-slate-500 max-w-3xl leading-relaxed">
          <span className="text-slate-600 font-bold italic">Our philosophy draws on three principles </span>rooted in classical thought and modern practice: that truth requires depth (Plato’s Allegory of the Cave), that integrity is built daily not declared (Stoic ethics), 
          and that genuine systems are designed from first principles, not assembled from templates.
            </p>
        </div>
            </div>
        </div>
        <div className="bg-blue-100 w-full md:w-[90%] py-10 px-3 rounded-xl mx-auto mb-5 flex flex-col justify-center">
            {/* Added gap and centered items. Removed w-[80%] to prevent squishing */}
            <div className="flex flex-wrap justify-evenly items-center mons-font w-full max-w-4xl gap-1 md:gap-4 mx-auto">
              
              {/* Map through your items to keep code clean and uniform */}
              {[
                { l: "O", n: "Ocean" },
                { l: "C", n: "Clarity" },
                { l: "E", n: "Expertise" },
                { l: "I", n: "Integrity" },
                { l: "O", n: "Oversight" },
                { l: "N", n: "Navigation" },
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className="hover:bg-deep group flex flex-col justify-center items-center bg-navy rounded-full 
                   /* Responsive Circle Size */
                   w-18 h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 
                   /* Prevent shrinking */
                   shrink-0"
                        >
                          <p className="text-bright italic font-bold group-hover:text-white 
                                        /* Responsive Letter Size */
                                        text-[12px] md:text-xl lg:text-2xl">
                            {item.l}
                          </p>
                          <p className="text-slate-400 italic uppercase group-hover:text-white 
                                        /* Responsive Label Size */
                                        text-[10px] md:text-[10px] lg:text-xs">
                            {item.n}
                          </p>
                        </div>
                      ))}
    
                </div>
                <p className="text-xl text-slate-800 mt-3 serif italic font-bold w:[70%] lg:w-[60%] mx-auto">Like the ocean, data compliance has visible currents and invisible depths. OCEION exists to navigate both — bringing clarity, 
            expertise, and integrity to organisations that refuse to treat compliance as a surface exercise.</p>
          </div>
          
   
        </>
    )
}

export default Philosophy;