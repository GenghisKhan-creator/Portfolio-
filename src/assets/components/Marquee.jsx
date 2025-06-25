import React from "react";
import { motion } from "framer-motion";

function Marquee () {
    const upperMarguee = [
        "images/01.svg",
        "images/02.svg",
        "images/03.svg",
        "images/04.svg",
        "images/05.svg",
        "images/06.svg",
        "images/07.svg",
        "images/08.svg",
        "images/09.svg",
        "images/10.svg",
        "images/11.svg",
        "images/12.svg",
        "images/13.svg",

    ];

    return (
        <div className="container mx-auto">
            <div className="flex MyGradient">
                <motion.div 
                    initial={{ x: 0 }} 
                    animate={{ x: "-100%" }} 
                    className="flex flex-shrink-0"
                    transition={{duration:30, repeat: Infinity, ease: "linear"}}
                    >
                    {upperMarguee.map((images, index) => {
                        return <img className="w-[200px] pr-20" src={images} key={index} />;
                    })}
                </motion.div>

                <motion.div 
                    initial={{ x: 0 }} 
                    animate={{ x: "-100%" }} 
                    className="flex flex-shrink-0"
                    transition={{duration:30, repeat: Infinity, ease: "linear"}}
                    >
                    {upperMarguee.map((images, index) => {
                        return <img className="w-[200px] pr-20" src={images} key={index} />;
                    })}
                </motion.div>
            </div>
        </div>
    );
};

export default Marquee;