'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation';
import { useState } from "react";
// import dnt from "/img/dnt.jpg";
// import Btn from "../components/Btn.jsx";
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
      <div className="hidden md:hidden lg:flex lg:flex-wrap top-2 left-4 md:left-60 bg-none md:bg-white justify-between border-b-primary border lg:px-24 md:px-8 py-6 m-0 z-50 items-center">
        <div className="hidden md:hidden lg:flex">
          <Image src="/img/dnt.jpg" alt="Dante" className="rounded-full" width={80} height={80}/>
        </div>

        <div className="hidden md:hidden lg:flex flex-row gap-80 items-center">
          <nav className="flex flex-row gap-10 font-medium">

            <Link
              href="/"
              className={`${
                pathname === '/' ? 'text-black font-semibold text-base' : 'text-[#646464] hover:text-primary text-base'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === '/about' ? 'text-black font-semibold text-base' : 'text-[#646464] hover:text-primary text-base'
              }`}
            >
              About 
            </Link>
            <Link
              href="/works"
              className={`${
                pathname === '/works' ? 'text-black font-semibold text-base' : 'text-[#646464] hover:text-primary text-base'
              }`}
            >
              My Works
            </Link>
          </nav>

          <Link href='/' className="flex flex-row bg-black px-6 py-4 rounded-full items-center gap-3">
            <p className="text-white text-base">Hire Me</p>
            <div className="bg-white p-2 rounded-full"><Icon className="text-black rotate-45" icon="prime:arrow-up" width="20" height="20" /></div>
          </Link>
        </div>

      </div>
      
    </div>
  )
}
