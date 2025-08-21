"use client"

import { motion } from "framer-motion"
import Image from "next/image"



const HeroSection = () => {
  return (
    <div className='lg:flex items-center md:py-10' id="top">
        <motion.section
        initial={{
            opacity : 0,
            y : -20
        }}
        animate={{
            opacity : 1,
            y : 0
        }}
        className='lg:flex-1 relative lg:bottom-20'
        >
            <h1 className='font-bold text-3xl mt-10 mb-4 md:text-4xl'>Drive Your Way, <span className='text-secondary'>Anytime, Anywhere</span></h1>
            <p className='md:text-xl'>Affordable car rentals with flexible options. Choose from a wide range of vehicles that fit your journey. Whether for business, family, or adventure.</p>
            <button className='bg-secondary cursor-pointer mt-5 mb-3 rounded px-4 py-2 text-primary font-bold duration-200 hover:brightness-90 md:px-6 md:py-3 md:text-xl'>Book now</button>
        </motion.section>
        <motion.div 
        initial={{
            x : 400,
            opacity : 0
        }}
        animate={{
            x : 0,
            opacity : 1
        }}
        transition={{
            duration : 1,
            ease : "backInOut"
        }}
        className='relative aspect-[3/2] w-80 mx-auto md:w-[500px] lg:flex-1 '>
            <Image src={"/assets/img/car.png"} alt='Car' fill 
            sizes='50vw'/>
        </motion.div>
    </div>
  )
}

export default HeroSection