"use client"
import { motion } from "framer-motion"
import Image from "next/image"



const CTA = () => {
  return (
    <div className="mb-20 py-10 md:py-16 bg-tertiary text-center w-screen relative right-10 lg:right-20 px-10 lg:px-20 text-primary">
        <motion.h1 
        initial={{
            opacity : 0,
            y : -100,
        }}
        whileInView={{
            opacity : 1,
            y : 0,
        }}
        transition={{
            duration : .4
        }}
        viewport={{
            once : true,
            amount : .8
        }}
        className='font-bold text-2xl md:text-3xl mb-2'><span className='text-secondary'>Ready for </span>Your Next Journey?</motion.h1>
        <motion.h1 
        initial={{
            opacity : 0,
            x : -100,
        }}
        whileInView={{
            opacity : 1,
            x : 0,
        }}
        transition={{
            duration : .4
        }}
        viewport={{
            once : true,
            amount : .8
        }}
        className='font-semibold md:text-xl'>Book your ride today and hit the road with confidence.</motion.h1>
        <motion.div 
        initial={{
            opacity : 0,
            x : 100,
        }}
        whileInView={{
            opacity : 1,
            x : 0,
        }}
        transition={{
            duration : .4
        }}
        viewport={{
            once : true,
            amount : .8
        }}
        className="relative h-40 mx-auto my-6 aspect-[3/2] md:h-64">
            <Image src={"/assets/img/car.png"} alt="" fill sizes="70vw" className="object-cover object-center"/>
        </motion.div>
        <motion.button 
        initial={{
            opacity : 0,
            y : 100,
        }}
        whileInView={{
            opacity : 1,
            y : 0,
        }}
        transition={{
            duration : .4,
            ease : "linear"
        }}
        viewport={{
            once : true,
        }}
        className='bg-secondary cursor-pointer  rounded px-4 py-2 text-primary font-bold duration-200 hover:brightness-80 md:px-6 md:py-3 md:text-xl'>Book now</motion.button>
    </div>
  )
}

export default CTA