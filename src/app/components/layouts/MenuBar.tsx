import { DataMenu } from "@/lib/data/DataMenu"
import { motion } from "framer-motion"
import { X } from "lucide-react"
import Link from "next/link"

const MenuBar = ({ setOpenMenu } : { setOpenMenu : (val:boolean) => void }) => {

  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, 
      delay : .2
    },
  },
};

  const childVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div 
    initial={{
      opacity : 0,
      height : 0
    }}
    animate={{
      opacity : 1,
      height : "100vh"
    }}
    exit={{
      opacity : 0,
      height : 0
    }}
    className="fixed top-0 right-0 w-screen bg-secondary">
      <X size={28} className="absolute right-10 top-4 cursor-pointer lg:right-20 md:top-7" strokeWidth={3} onClick={() => setOpenMenu(false)}/>
      <motion.ul 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="absolute right-1/2 translate-x-1/2 top-1/2 -translate-y-1/2  space-y-10 md:top-2/5">
        {DataMenu.map(({href, icon, name}, index) => (
          <motion.li 
          variants={childVariants}
          key={index}>
            <Link href={href} className="flex items-center text-2xl gap-4 text-primary duration-200 hover:text-tertiary md:scale-125">{icon}{name}</Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  )
}

export default MenuBar