import React from "react";
import mulumba from '/images/mulumba.png';

function Card(){
    return (
        <div className="w-[360px] lg:w-full lg:p-5">
            <div className="bg-[#191919] h-145 w-full rounded-4xl">
                <div className="h-80 lg:h-90 border-13 border-[#191919] overflow-hidden rounded-4xl sm:border-10 md:border-12 lg:border-14">
                    <img src={mulumba} alt="" className="w-full h-full object-cover rounded-2xl transform transition-transform duration-200 hover:scale-110 "/>
                </div>
                <div className="font-Grotesk text-[#F8FAFC] px-5">
                    <h2 className="font-extrabold text-3xl text-gray-100">
                        Hustlers University Street Voice. Accra, Ghana.
                    </h2>
                    <h3 className="my-2">1957</h3>
                    <div className="flex">
                        <div>
                            <h2 className="font-extrabold text-[20px]">60%</h2>
                            <p>Users gain within one month of launch.</p>
                        </div>
                        <div >
                            <h2 className="font-extrabold text-[20px]">$45M+</h2>
                            <p>Processed within 6 months of launch.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-[40rem] h-10 relative">
                <div
            className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div
            className="absolute inset-x-5 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-3/4" />
            <div
            className="absolute inset-x-45 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div
            className="absolute inset-x-45 top-0 bg-gradient-to-r from-transparent via-yellow-500 to-transparent h-px w-1/4" />
            </div>
        </div>
    )
}

export default Card;