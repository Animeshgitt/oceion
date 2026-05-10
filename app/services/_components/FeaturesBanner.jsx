const FeaturesBanner =() =>{
    return (
        <>
         <div className="bg-navy w-full flex lg:flex-row gap-x-8 gap-y-6 md:gap-y-2 lg:gap-y-8 
                uppercase justify-evenly items-center py-4 
                 text-light text-sm mons-font lg:py-4 flex-wrap" >
                <div className="flex justify-center items-center gap-x-2">
                    <div className="flex flex-col text-xs justify-center items-center">
                            <p className="text-white font-bold uppercase text-2xl less-spacing">200<span className="text-xm text-bright">+</span></p>
                            <p className="text-slate-500 italic">Clients Served</p>
                    </div>
                 </div>
                 <div className="flex justify-center items-center gap-x-2">
                    <div className="flex flex-col text-xs justify-center items-center">
                            <p className="text-white font-bold uppercase text-2xl less-spacing">8<span className="text-xm text-bright">+</span></p>
                            <p className="text-slate-500 italic">Service Area</p>
                    </div>
                 </div><div className="flex justify-center items-center gap-x-2">
                    <div className="flex flex-col text-xs justify-center items-center">
                            <p className="text-white font-bold uppercase text-2xl less-spacing">15<span className="text-xm text-bright">+</span></p>
                            <p className="text-slate-500 italic">Jurisdictions</p>
                    </div>
                 </div><div className="flex justify-center items-center gap-x-2">
                    <div className="flex flex-col text-xs justify-center items-center">
                            <p className="text-white font-bold uppercase text-2xl less-spacing">98<span className="text-xm text-bright">%</span></p>
                            <p className="text-slate-500 italic">Compliance Rate</p>
                    </div>
                 </div><div className="flex justify-center items-center gap-x-2">
                    <div className="flex flex-col text-xs justify-center items-center">
                            <p className="text-white font-bold uppercase text-2xl less-spacing">10<span className="text-xm text-bright">+</span></p>
                            <p className="text-slate-500 italic">Years Expertise</p>
                    </div>
                 </div>
                 </div>
        
        
        </>
    )
}
export default FeaturesBanner;