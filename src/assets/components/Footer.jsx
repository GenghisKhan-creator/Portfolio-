import React from "react";

function FooterItems() {
    return (
        <div className='w-full font-Grotesk text-gray-100 flex flex-col md:flex-row justify-between p-4 sm:p-5 lg:p-6 text-center md:text-left'>
            <div className="mb-4 md:mb-0">
                <p>Designed & Developed</p>
                <p>By Nbehedimah</p>
            </div>

            <div className="mb-4 md:mb-0">
                <ul className='flex flex-wrap justify-center md:justify-start gap-2'>
                    <li className='border p-2 rounded-full hover:bg-white hover:text-black text-[13px] whitespace-nowrap h-[30px] flex justify-center items-center'>
                        <a href="">INSTAGRAM</a>
                    </li>
                    <li className='border p-2 rounded-full hover:bg-white hover:text-black text-[13px] whitespace-nowrap h-[30px] flex justify-center items-center'>
                        <a href="" className=''>LINKEDIN</a>
                    </li>
                    <li className='border p-2 rounded-full hover:bg-white hover:text-black text-[13px] whitespace-nowrap h-[30px] flex justify-center items-center'>
                        <a href="">TELEGRAM</a>
                    </li>
                </ul>
            </div>

            <div>
                <p>© {year}-All Rights Reserved</p>
                {/* Adjusted flex for better centering on small screens */}
                <p className='flex justify-center md:justify-end mt-1'><a href="#">⇈ back to top ⇈</a></p> 
            </div>
        </div>
    )
}

export default FooterItems;