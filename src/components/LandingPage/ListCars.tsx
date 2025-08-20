"use client"

import { Cars } from "@/lib/data/Cars"
import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Swiper as SwiperClass } from "swiper/types"
import 'swiper/css';
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"

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

    const swiperRef = useRef<SwiperClass | null >(null)
    const [currCar, setCurrCar] = useState<Car | null>(Cars[0])
    const [mounted, setMounted] = useState(false)
    
    useEffect(() => {
        setMounted(true)
    },[])

    if(!mounted) return null

    const highestPrice = Cars.sort((a,b) => b.pricePerDay - a.pricePerDay)[0].pricePerDay

    const listsTransmision = [...new Set(Cars.map(car => car.transmission))]
    const listFuel = [...new Set(Cars.map(car => car.fuel))]

    const CurrencyFormatter = ({ amount }: { amount : number }) => {
        const formatCurrency = new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        }).format(amount);
  
        return <span>{formatCurrency}</span>;
    };

  return (
    <div className='my-20 min-h-[600px] md:mt-28 scroll-mt-6' id="listCars">
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
        className='text-center font-bold text-2xl md:text-3xl mb-8'><span className='text-secondary'>Our</span> Cars</motion.h1>
        <motion.div
        initial={{
            opacity : 0,
            x : -200,
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
            amount : .4
        }} 
        className="md:flex md:items-start lg:items-center md:gap-16"
        >
            <Swiper
            modules={[Autoplay]}
            autoplay={{
                delay : 2000,
                disableOnInteraction : false
            }}
            loop
            slidesPerView={1}
            className="relative aspect-[3/2] w-80 md:order-2 md:flex-1 md:bottom-10"
            onSlideChange={(swiper) => setCurrCar(Cars[swiper.realIndex])}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
                {Cars.map(car => (
                    <SwiperSlide key={car.id} className="relative aspect-[3/2] w-80 md:order-2  md:flex-1">
                        <Image src={"/assets/img/car.png"} alt="Car" fill sizes="50vw" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <section className="space-y-2 my-6 md:order-1 md:text-xl lg:flex-1 lg:space-y-4 font-semibold">
                <div className="flex gap-3">
                    <p className="text-secondary">Brand : </p>
                    <p>{currCar?.brand}</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-secondary">Model : </p>
                    <p>{currCar?.model}</p>
                </div>
                <div className="flex gap-3">
                    <p className="text-secondary">Transmision : </p>
                    <div className="space-x-2">{listsTransmision.map(t => <span key={t} className={`border-2 border-secondary px-3 py-1 ${currCar?.transmission === t ? "text-primary bg-secondary" : "bg-primary text-secondary"} rounded`}>{t}</span>)}</div>
                </div>
                <div className="flex gap-3">
                    <p className="text-secondary">Year : </p>
                    <p>{currCar?.year}</p>
                </div>
                <div className="">
                    <section className="flex gap-3">
                        <p className="text-secondary">Price / day (Rp) :</p>
                        <p><CurrencyFormatter amount={currCar?.pricePerDay ?? 400000}/></p>
                    </section>
                    <section className="w-full h-8 relative">
                        <div style={{ width : `${(currCar?.pricePerDay ?? 500000) / highestPrice * 100}%` }} className="w-full h-full rounded duration-300 bg-secondary"/>
                    </section>
                </div>
                <div className="flex gap-3 mt-4">
                    <p className="text-secondary">Fuel : </p>
                    <div className="space-x-2">{listFuel.map(f => <span key={f} className={`border-2 border-secondary px-3 py-1 ${currCar?.fuel === f ? "text-primary bg-secondary" : "bg-primary text-secondary"} rounded`}>{f}</span>)}</div>
                </div>
            </section>
        </motion.div>
        <motion.div 
        initial={{
            opacity : 0,
            y : 80,
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
        className="flex flex-wrap gap-3 md:mt-4">
            {Cars.map((car, index) => (
                <button key={car.id} className={`px-4 py-2  rounded flex justify-between ${currCar?.id === car.id ? "bg-secondary text-primary" : "bg-secondary/30 text-tertiary hover:bg-secondary/70"} duration-200 font-semibold cursor-pointer md:px-6 md:py-4 md:text-lg`} onClick={() => {
              setCurrCar(car);
              swiperRef.current?.slideToLoop(index);

            }}>
                    <span>{car.model}</span>
                </button>
            ))}
        </motion.div>
        
    </div>
  )
}

export default ListCars