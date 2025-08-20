"use client"

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MenuBar from './MenuBar'
import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenMenu(false);
      }
    }

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [setOpenMenu]);
  
  return (
    <nav className='h-14 fixed top-0 w-full right-0 px-10 lg:px-20 z-[60] flex items-center justify-between md:h-20 bg-primary'>
        <Link href={"/"} className='font-bold flex items-center text-xl md:text-3xl'>Go<span className='text-secondary'>Rent</span><Image src={"/logo.svg"} alt=' ' width={25} height={25} className='md:scale-150 md:ml-2'/></Link>
        <button onClick={() => setOpenMenu(p => !p)} className='font-bold cursor-pointer outline-none'><Menu size={28} strokeWidth={3}/></button>
        <AnimatePresence>
            {openMenu && <MenuBar setOpenMenu={setOpenMenu}/>}
        </AnimatePresence>        
    </nav>
  )
}

export default Navbar