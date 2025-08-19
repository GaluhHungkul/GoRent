"use client"

import { WhyRentWithUsPoints } from '@/lib/data/WhyRentWithUsPoints'
import { motion } from 'framer-motion'


const WhyRentWithUs = () => {
  return (
    <motion.div 
    initial={{
      opacity : 0,
      x : 200
    }}
    whileInView={{
      opacity : 1,
      x : 0
    }}
    viewport={{
      once : true,
      amount : .5
    }}
    transition={{
      duration : .4
    }}
    className='mt-20 min-h-96 md:mt-28'>
        <h1 className='text-center font-bold text-2xl md:text-3xl'><span className='text-secondary'>Why Rent</span> with Us?</h1>
        <ul className='grid md:grid-cols-2 mt-10 gap-y-6 gap-x-4 lg:grid-cols-4'>
           {WhyRentWithUsPoints.map(({content, icon},i) => (
            <li key={i} className='flex flex-col items-center gap-4 bg-secondary/20 rounded px-6 py-4 hover:bg-secondary/40 duration-300 md:space-y-4 lg:py-8 lg:px-6 group hover:-translate-y-6 shadow-xl hover:shadow-2xl '>
                <span className='md:scale-125 text-secondary'>{icon}</span>
                <p className='text-center text-xs font-semibold md:text-base'>{content}</p>
            </li>
           ))}
        </ul>
    </motion.div>
  )
}

export default WhyRentWithUs