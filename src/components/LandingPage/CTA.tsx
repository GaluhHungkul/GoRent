"use client"
import { motion } from "framer-motion"



const CTA = () => {
  return (
    <div className="text-tertiary mb-10">
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
        className='font-bold text-2xl md:text-3xl mb-8'><span className='text-secondary'>Ready for </span>Your Next Journey?</motion.h1>
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
        className='font-semibold mb-4'>Book your ride today and hit the road with confidence.</motion.h1>
        <button className='bg-secondary cursor-pointer  rounded px-4 py-2 text-primary font-bold duration-200 hover:brightness-90 md:px-6 md:py-3 md:text-xl'>Book now</button>
    </div>
  )
}

export default CTA