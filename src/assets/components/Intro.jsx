import React from "react";

function Intro() {
    return (
        <div id='intro-slider' className='h-screen p-10 bg-gray-50 absolute top-0 left-0 font-Grotesk z-10 w-full flex flex-col gap-10 tracking-tight'>
            <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl' id='title-1'>Software Developer.</h1>
            <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl' id='title-2'>Designer.</h1>
            <h1 className='text-6xl sm:text-7xl md:text-8xl lg:text-9xl' id='title-3'>Freelancer.</h1>
        </div>
    )
}

export default Intro;