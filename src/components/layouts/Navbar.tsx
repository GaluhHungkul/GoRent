"use client"

import { Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import MenuBar from './MenuBar'
import { AnimatePresence } from 'framer-motion'

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)


  return (
    <nav className='h-14 flex items-center justify-between md:h-20'>
        <Link href={"/"} className='font-bold text-xl md:text-3xl'>Go<span className='text-secondary'>Rent</span></Link>
        <button onClick={() => setOpenMenu(p => !p)} className='font-bold cursor-pointer '><Menu size={28} strokeWidth={3}/></button>
        <AnimatePresence>
            {openMenu && <MenuBar setOpenMenu={setOpenMenu}/>}
        </AnimatePresence>        
    </nav>
  )
}

export default Navbar