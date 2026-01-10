'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from "react";
// import dnt from "/img/dnt.jpg";
import Btn from "../components/Btn";
import { Icon } from '@iconify/react';

export default function Navbar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
      

      {/* Tab & desktop */}
      <div className="hidden md:hidden lg:flex lg:flex-wrap top-2 left-4 md:left-60 bg-none md:bg-none justify-between lg:px-24 md:px-8 py-4 m-0 z-50 items-center">
        <div className="hidden md:hidden lg:flex">
          <Image src="/img/dnt.jpg" alt="Dante" className="rounded-full" width={60} height={60}/>
        </div>

        <div className="hidden md:hidden lg:flex flex-row gap-80 items-center">
          <nav className="flex flex-row gap-10 font-medium">

            <Link
              href="/"
              className={`${
                pathname === '/' ? 'text-black font-semibold text-xl' : 'text-[#646464] hover:text-primary text-xl'
              }`}
            >
              HOME
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === '/about' ? 'text-black font-semibold text-xl' : 'text-[#646464] hover:text-primary text-xl'
              }`}
            >
              ABOUT 
            </Link>
            <Link
              href="/works"
              className={`${
                pathname === '/works' ? 'text-black font-semibold text-xl' : 'text-[#646464] hover:text-primary text-xl'
              }`}
            >
              MY WORKS
            </Link>
          </nav>

          <Btn name="Hire Me"/>
        </div>

      </div>
      
    </div>
  )
}
