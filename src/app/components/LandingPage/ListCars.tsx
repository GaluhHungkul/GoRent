"use client"

import { Cars } from "@/lib/data/Cars"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"


type Car = {
    id: number
    brand: string
    model: string
    year: number
    transmission: string
    fuel: string
    image: string
    pricePerDay: number
}

const ListCars = () => {

    const [selectedCar, setSelectedCar] = useState<Car | null>(Cars[0])

  return (
    <div className='my-20  min-h-[600px] md:mt-28'>
        <h1 className='text-center font-bold text-2xl md:text-3xl mb-8'><span className='text-secondary'>Our</span> Cars</h1>
        <div className="flex w-full flex-col ">
            {selectedCar && 
                <motion.div
                initial={{
                    opacity : 0,
                    y : -20,
                }}
                animate={{
                    opacity : 1,
                    y : 0,
                }}
                exit={{
                    opacity : 0,
                    y : -20,
                }}
                className="md:flex md:items-start lg:items-center"
                >
                    <section className="relative aspect-[3/2] w-80 md:order-2  md:flex-1 ">
                        <Image src={selectedCar.image} alt="Car" fill sizes="50vw"/>
                    </section>
                    <section className="space-y-2 my-6 md:order-1 md:text-lg lg:flex-1 lg:space-y-4">
                        <p className="bg-secondary/80 w-max pr-20 px-2 py-1 rounded text-primary font-semibold md:pr-14 lg:pr-80">{selectedCar.brand}</p>
                        <p className="bg-secondary/80 w-max pr-20 px-2 py-1 rounded text-primary font-semibold md:pr-14 lg:pr-80">{selectedCar.model}</p>
                        <p className="bg-secondary/80 w-max pr-20 px-2 py-1 rounded text-primary font-semibold md:pr-14 lg:pr-80">{selectedCar.transmission}</p>
                        <p className="bg-secondary/80 w-max pr-20 px-2 py-1 rounded text-primary font-semibold md:pr-14 lg:pr-80">Year : {selectedCar.year}</p>
                        <p className="bg-secondary/80 w-max pr-20 px-2 py-1 rounded text-primary font-semibold md:pr-14 lg:pr-80">Price/day : Rp. {selectedCar.pricePerDay}</p>
                        <p className="bg-secondary/80 w-max pr-20 px-2 py-1 rounded text-primary font-semibold md:pr-14 lg:pr-80">Fuel : {selectedCar.fuel}</p>
                    </section>
                </motion.div>
            }
            
            
        </div>
        <div className="flex flex-wrap gap-3">
            {Cars.map((car) => (
                <div key={car.id} className={`px-4 py-2  rounded flex justify-between ${selectedCar?.id === car.id ? "bg-secondary text-tertiary" : "bg-secondary/30 hover:bg-secondary/70"} duration-200 font-semibold cursor-pointer md:px-6 md:py-4 md:text-lg`} onClick={() => setSelectedCar(car)}>
                    <span>{car.model}</span>
                </div>
            ))}
        </div>
        
    </div>
  )
}

export default ListCars