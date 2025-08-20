import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-tertiary text-primary w-screen relative right-10 lg:right-20">
      <div className=" mx-auto px-10 lg:px-20 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-28 lg:grid-cols-3 lg:py-20">
        <div>
          <h1 className='font-bold text-xl md:text-3xl'>Go<span className='text-secondary'>Rent</span></h1>
          <p className="mt-3 text-sm md:text-base">
            Reliable car rental service with affordable prices and top quality cars.  
            Drive your way with us.
          </p>
        </div>

        {/* <div>
          <h3 className="text-secondary font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li><Link href="/" className="hover:text-primary/70">Home</Link></li>
            <li><Link href="/" className="hover:text-primary/70">About</Link></li>
            <li><Link href="/" className="hover:text-primary/70">Services</Link></li>
            <li><Link href="/" className="hover:text-primary/70">Contact</Link></li>
          </ul>
        </div> */}

        <div>
          <h3 className="text-secondary font-semibold mb-3 md:text-xl">Contact</h3>
          <ul className="space-y-2 text-sm md:text-base">
            <li>Email: support@carrental.com</li>
            <li>Phone: +62 812 3456 7890</li>
            <li>Jakarta, Indonesia</li>
          </ul>
        </div>

        <div>
          <h3 className="text-secondary font-semibold mb-3 md:text-xl">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="/" className="hover:text-primary/70"><Facebook /></Link>
            <Link href="/" className="hover:text-primary/70"><Twitter /></Link>
            <Link href="/" className="hover:text-primary/70"><Instagram /></Link>
            <Link href="/" className="hover:text-primary/70"><Linkedin /></Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-sm md:text-base lg:py-6">
        © {new Date().getFullYear()} CarRental. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer