import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import gsap from "gsap";
import { IconBrandLinkedin,IconBrandInstagram } from "@tabler/icons-react";
import { Stars } from "@react-three/drei"
import { Canvas } from '@react-three/fiber';
import { useScroll, useMotionValueEvent, useTransform, motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import Header from './assets/components/Header'
import Intro from './assets/components/Intro'
import right from '/images/right.png';
import angry from '/images/angry.gif';
import avatar from '/images/avatar.png'
import DottedButton from './assets/components/Button';
import SparklesPreview from './assets/components/projects';
import MyStack from './assets/components/Stack';
import Marquee from './assets/components/Marquee';
import Card from './assets/components/Card';
import { AnimatedTestimonialsDemo } from './assets/components/Testimonials';
import Test from './assets/components/Test';
import ResponsiveCard from './assets/components/reponsivecard';
import { CardSpotlightDemo } from './assets/components/ContactsCard';


function App() {
  const targetRef = useRef(null);
  const { scrollY } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  useMotionValueEvent(scrollY, "change", () => {
    console.log(scrollY.get())
  })

  const scale = useTransform(scrollY, [0,900], [1, 0.8]);
  const opacity = useTransform(scrollY, [0,1500], [1, 0]);

  const comp = useRef(null)

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline()
      t1.from("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
        delay: 0.3,
      }).from(["#title-1", "#title-3", "#title-2"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.3,
      }).to(["#title-1", "#title-3", "#title-2"], {
        opacity: 0,
        y: "-=30",
        delay: 0.3,
        stagger: 0.5,
      })
      .to("#intro-slider", {
        xPercent: "-100",
        duration: 1.3,
      }).from("#home", {
        opacity: 0,
        duration: 1.1,
      }).from("#right", {
        xPercent: "100",
        opacity: 0,
        duration: 1.3,
        delay: 0.3,
      })
    }, comp)

    return () => ctx.revert()
  }, [])

  const y = new Date();
  const year = y.getFullYear();

  const [showCard, setShowCard] = useState(false)
  const cardRef = useRef(null);
  const buttonRef = useRef(null);

  const handleButtonClick = () => {
    setShowCard(true)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showCard &&
        cardRef.current && !cardRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setShowCard(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    };
  }, [showCard]);

  const mulumba = "/images/mulumba.png"
  const necessary =  "/images/necessary.png"
  const campus = "/images/campus.png"
  const school = "/images/school.png"
  
  const projectsDone = [
    {
      image : mulumba,
      title : "Hustlers University Street Voice. Accra, Ghana.",
      year : "1957",
      monthly_per : "60%",
      monthly_amnt : "$45M+",
      monthly_per_text : "Users gain within one month of launch.",
      monthly_amnt_text : "Processed within 6 months of launch.",
      url : "https://hustlerblog.onrender.com"
    }, 
    {
      image : necessary,
      title : "Necessary Aid Design Con. Wa, Ghana.",
      year : "1957",
      monthly_per : "60%",
      monthly_amnt : "$0",
      monthly_per_text : "60% Complete.",
      monthly_amnt_text : "Processed within 6 months of launch.",
      url : "https://mulumba.onrender.com"
    },
    {
      image : campus,
      title : "Campus Support(Personal Project). Central University",
      year : "2023",
      monthly_per : "100%",
      monthly_amnt : "$0",
      monthly_per_text : "100% Complete.",
      monthly_amnt_text : "Processed within 6 months of launch.",
      url : "https://campus-support.onrender.com/"
    },
    {
      image : school,
      title : "Lecturers Attendance and Notification System",
      year : "2025",
      monthly_per : "100%",
      monthly_amnt : "$0",
      monthly_per_text : "100% Complete.",
      monthly_amnt_text : "Processed within 6 months of launch.",
      url : "https://lecturers-attendance-and-notification.onrender.com"
    },
  ]

  const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "DD335C"]
  const color = useMotionValue(COLORS[0]);
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, black 51%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  const background = useMotionTemplate`${color}`

  useEffect(() => {
    animate(color, COLORS, {
      ease: 'easeInOut',
      duration: 8, 
      repeat: Infinity,
      repeatType: "mirror"
    });
  }, []);
  
  return (
    <div className='relative bg-black' ref={comp}>
      <Intro />
      <Header />
      <motion.div className="relative font-Grotesk px-5 lg:px-20 rounded-br-[60px] rounded-bl-[60px]" style={{
        backgroundImage,
      }}>
        <div className='w-full xl:h-fit' id="home">
          <div className='font-Grotesk relative mt-30 md:mt-60 lg:mt-25'>
            <div className='flex justify-center mb-10'>
              <div className='w-30 h-30 bg-[#D1D5DB] left-269 rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] rounded-tl-[60px] items-center justify-center flex lg:hidden'>
              <img src={avatar} alt="" className='rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] rounded-tl-[60px] w-26' id='right'/>
            </div>
            </div>
            <div className='flex justify-center'>
              <h1 className="font-Grotesk text-[#FFD700] font-extrabold text-5xl whitespace-nowrap md:text-7xl lg:text-8xl mb-5">WEB DESIGNER</h1>
              <img src={right} alt="" className='w-30 mx-5 hidden lg:block' id='right'/>
            </div>
            <div className='flex justify-center'>
              <img src={angry} alt="" className='w-20 mx-10 hidden lg:block' id='right'/>
              <h1 className="text-[#F8FAFC] text-center font-extrabold text-5xl whitespace-nowrap md:text-7xl lg:text-8xl">WEB DEVELOPER</h1>
            </div>
            <div className='hidden w-30 h-30 bg-[#D1D5DB] left-269 rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] items-center justify-center lg:absolute lg:flex lg:left-[83%]'>
              <img src={avatar} alt="" className='rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] rounded-tl-[60px] w-26' id='right'/>
            </div>
            <div className='flex items-center justify-center'>
              <motion.div className='text-gray-100 w-fit mt-30 flex justify-center items-center rounded-full px-4 py-2 gap-1.5 lg:mt-30 lg:flex lg:justify-center lg:items-center' style={{
                border,
                boxShadow,
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                backdropFilter: 'blur(10px) saturate(180%)',
                WebkitBackdropFilter: 'blur(10px) saturate(180%)',
              }}>
              <div> 
                <p><span className='text-[#FFC700] font-bold'>Open to</span> new Job offers</p>
              </div>
              <motion.div className='h-3 w-3 rounded-br-[60px] rounded-bl-[60px] rounded-tr-[60px] rounded-tl-[60px] mx-2' style={{
                background,
              }}></motion.div>
            </motion.div>
            </div>
            <div className='text-gray-100 w-full flex flex-col justify-center items-center mt-10 lg:flex lg:flex-row lg:justify-center lg:items-center lg:gap-10 lg:mt-10 lg:mb-5'>
              <div className>
                <p>SAY HELLO</p>
              </div>
              <div className='z-10'>
                <ul className='flex gap-5'>
                  <li><a href="https://www.linkedin.com/in/gideon-issah-b06152187/" target='_blanck'><IconBrandLinkedin/></a></li>
                  <li><a href="https://www.instagram.com/mr._socrates_/?utm_source=ig_contact_invite#" target='_black'><IconBrandInstagram/></a></li>
                </ul>
              </div>
              <div className='mt-10 mx-2 mb-10 lg:w-170 lg:p-5'>
                <p>Hello there! I'm Gideon, a <span className='text-[#FFC700] font-bold'>fullstack developer</span> based in Accra, Ghana. I specialize in crafting user-focused web and mobile experiences.
                   I'm passionate about building solutions that drive conversions and truly resonate with users.
                </p>
              </div>
              <div className='z-10 mb-10 md:mb-10 lg:mb-0'>
                <DottedButton onClick={handleButtonClick} ref={buttonRef} />
                {showCard && (
                <div
                  className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center transition-opacity duration-300 z-40" // z-40 for overlay
                  style={{ backdropFilter: 'blur(8px)' }} // Blur effect
                  // Clicking anywhere on this overlay will close the card
                  onClick={() => setShowCard(false)}
                >
                  {/* Card container to stop propagation on card content */}
                  <div onClick={(e) => e.stopPropagation()}> {/* Prevents clicks on the card from closing it */}
                    <CardSpotlightDemo ref={cardRef} />
                  </div>
                </div>
              )}

              </div>
            </div>
          </div>
        </div>
        <div className='absolute inset-0 z-1'>
          <Canvas>
            <Stars radius={50} count={2500} factor={4} fade speed={2}/>
          </Canvas>
        </div>
      </motion.div>
      <div ref={targetRef} className='font-Grotesk relative'>
        <SparklesPreview animationScale={scale} animationOpacity={opacity}/>
        <div className='grid grid-cols-1 px-2 md:grid-cols-2 gap-15 lg:px-30 lg:grid-cols-2 mb-10'>
          {projectsDone.map((project, index) => (
            <div className='sticky top-10'>
              <ResponsiveCard
              key = {index}
              image = {mulumba}
              title = {project.title}
              year ={project.year}
              monthly_per = {project.monthly_per}
              monthly_amnt = {project.monthly_amnt}
              monthly_per_text = {project.monthly_per_text}
              monthly_amnt_text = {project.monthly_amnt_text}
              {...project}
            />
            </div>
          ))}
        </div>
      </div>
      <div className='font-Grotesk'>
        <MyStack/>
        <div className='container mx-auto w-full text-gray-100 flex justify-center items-center overflow-x-hidden'>
          <Marquee />
        </div>
      </div>
      <div className='font-Grotesk'>
        <Test/>
        <AnimatedTestimonialsDemo/>
      </div>
      <div className='w-full h-screen font-Grotesk text-gray-100 flex flex-col justify-center items-center'>
        <h3 className='font-extrabold text-3xl md:text-7xl'>INTERESTED IN</h3>
        <h3 className='font-extrabold text-3xl mb-4 md:text-7xl'>WORKING TOGETHER?</h3>
        <div>
          <DottedButton onClick={handleButtonClick} ref={buttonRef}/>
          {showCard && (
        // Overlay for blurring and click-outside dismissal
            <div
              className="fixed inset-0 bg-transparent bg-opacity-50 flex items-center justify-center transition-opacity duration-300 z-40" // z-40 for overlay
              style={{ backdropFilter: 'blur(5px)' }} // Blur effect
              // Clicking anywhere on this overlay will close the card
               onClick={() => setShowCard(false)}
            >
              {/* Card container to stop propagation on card content */}
              <div onClick={(e) => e.stopPropagation()}> {/* Prevents clicks on the card from closing it */}
                <CardSpotlightDemo ref={cardRef} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='w-full font-Grotesk text-gray-100 flex flex-col md:flex-row justify-between p-4 sm:p-5 lg:p-6 text-center md:text-left'>
        <div className="mb-4 md:mb-0">
            <p>Designed & Developed</p>
            <p>By Nbehedimah</p>
        </div>

        <div className="mb-4 md:mb-0">
            <ul className='flex flex-wrap justify-center md:justify-start gap-2'>
                <li className='border p-2 rounded-full hover:bg-white hover:text-black text-[13px] whitespace-nowrap h-[30px] flex justify-center items-center'>
                    <a href="https://www.instagram.com/mr._socrates_/?utm_source=ig_contact_invite#" target='_blank'>INSTAGRAM</a>
                </li>
                <li className='border p-2 rounded-full hover:bg-white hover:text-black text-[13px] whitespace-nowrap h-[30px] flex justify-center items-center'>
                    <a href="https://www.linkedin.com/in/gideon-issah-b06152187/" target='_blank' className=''>LINKEDIN</a>
                </li>
                <li className='border p-2 rounded-full hover:bg-white hover:text-black text-[13px] whitespace-nowrap h-[30px] flex justify-center items-center'>
                    <a href="https://t.me/Socrates047" target='_blank'>TELEGRAM</a>
                </li>
            </ul>
        </div>

        <div>
            <p>© {year}-All Rights Reserved</p>
            {/* Adjusted flex for better centering on small screens */}
            <p className='flex justify-center md:justify-end mt-1'><a href="#">⇈ back to top ⇈</a></p> 
        </div>
      </div>
    </div>
  ) 
}

export default App
