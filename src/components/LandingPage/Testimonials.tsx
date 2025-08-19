"use client"

import { testimonials } from "@/lib/data/Testimonials"
import { motion } from "framer-motion"
import Image from "next/image"

const Testimonials = () => {

    const containerVariants = {
        hidden : {
            opacity : 0,
            y : -10
        },
        visible : {
            opacity : 1,
            y : 0,
            transition : {
                staggerChildren : .2
            }
        }
    }

    const childVariants = {
        hidden : {
            opacity : 0,
            y : -20
        },
        visible : {
            opacity : 1,
            y : 0
        }
    }

  return (
    <div className="min-h-80 mb-20">
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
        className='text-center font-bold text-2xl md:text-3xl mb-8'><span className='text-secondary'>Hear from </span>Our Clients</motion.h1>
        <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
            once : true
        }}
        className="space-y-4">
            {testimonials.map(val =>  (
                <motion.div 
                variants={childVariants}
                key={val.id} className="py-2 px-4 items-center shadow-lg duration-200 hover:shadow-xl hover:-translate-y-2 border border-tertiary/10">
                    <section className="flex items-center gap-4 mb-4">
                        <div className="relative size-14 rounded-full overflow-hidden flex">
                            <Image src={val.image} alt={val.name} fill sizes="20vw" className="object-cover object-center"/>
                        </div>
                        <p className="font-bold text-xl ">{val.name}</p>
                    </section>
                    <section>
                        <p>{val.comment}</p>
                    </section>
                </motion.div>
            ))}
        </motion.div>
    </div>
  )
}

export default Testimonials