import React from "react";

const FooterBanner = () => {
    return (
        <>
        <div className="bg-bright mt-5  text-white w-full flex flex-col md:flex-row gap-y-8 justify-between items-center 
        lg:px-16 py-20 mons-font">
            <div className="flex flex-col gap-y-2 w-[90%] md:w-[40%] justify-start items-start pl-8">
                <p className="text-4xl font-bold">Ready to go beyond the surface?</p>
                <p className="text-lg ">Book a complimentary consultation with our 
                    privacy experts and understand your organization&aps;s true compliance posture.</p>
            </div>
            <div className="w-[90%] md:w-[50%] text-center ">
                <a className="hover:bg-blue-100 hover:text-black py-2 px-16 text-lg font-bold md:less-spacing bg-white rounded-md text-bright " href="#form-fill">Book a Consultation</a>
            </div>
        </div>
        </>
    )
}

export default FooterBanner;