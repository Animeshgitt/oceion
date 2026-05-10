

import React from "react";
import Image from "next/image";
const Banner = () => {


    return (
        <>
        
         <div className="flex w-[90%] md:w-[80%] bg-blue-100 rounded-md p-5 mx-auto justify-center items-center gap-1 mt-5">
            <Image src="/logo.png" alt="Oceion logo" width="100" height="100" className="block"/>
            <div className="flex flex-col gap-1 justify-center items-start">
                    <p className="less-spacing mons-font font-bold text-navy uppercase text-start">
                        Oceion
                    </p>
                    <p className="serif text-start text-base text-navy">
                        Compliance Beyond the Surface
                    </p>
            </div>
        </div>
        </>
    )
}

export default Banner;