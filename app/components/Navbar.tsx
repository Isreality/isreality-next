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
          <Image src="/img/dnt.jpg" alt="Dante" className="rounded-full" width={50} height={50}/>
        </div>

        <div className="hidden md:hidden lg:flex flex-row gap-80 items-center">
          <nav className="flex flex-row gap-10 font-medium">

            <Link
              href="/"
              className={`${
                pathname === '/' ? 'text-primary font-semibold' : 'text-black hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`${
                pathname === '/shop' ? 'text-primary font-semibold' : 'text-black hover:text-primary'
              }`}
            >
              About 
            </Link>
            <Link
              href="/works"
              className={`${
                pathname === '/tailors' ? 'text-primary font-semibold' : 'text-black hover:text-primary'
              }`}
            >
              My Works
            </Link>
          </nav>

          {/* <Btn name="Hire Me" className="hidden md:flex lg:flex"/> */}
        </div>

      </div>
      
    </div>
  )
}
