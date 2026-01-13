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
      {/* Mobile */}
      <div className="lg:hidden flex flex-row justify-between bg-white border-b-primary border items-center px-4 py-4 md:px-8 md:py-6 left-0 w-full">
        <div className="lg:hidden items-center">
          <Image src="/img/dnt.jpg" alt="Dante" className="rounded-full" width={40} height={40}/>
        </div>

        <div className="lg:hidden z-50">    
            <button onClick={()=>toggleNavbar()} className="text-black justify-center">{isOpen ? <Icon icon="material-symbols:close" className="fixed text-black font-bold size-5 top-5 z-50 mr-4 right-4 cursor-pointer" width="30" height="30" /> : <Icon icon="ci:hamburger-md" className="text-primary font-bold cursor-pointer" width="30" height="30" />}</button>
              {isOpen &&(
                <div>
                  <div className="fixed h-full w-screen right-0 translate-y-0 transition-all top-0 py-4">
                    <div className="flex bg-white flex-col absolute inset-x-0 top-0 h-80 p-8 gap-5 z-100 w-full">
                      <nav className="flex flex-col gap-5 font-medium">
                        <Link
                          href="/"
                          className={`${
                            pathname === '/' ? 'text-black font-semibold text-xl text-center' : 'text-[#646464] hover:text-primary text-xl text-center'
                          }`}
                        >
                          HOME
                        </Link>
                        <Link
                          href="/about"
                          className={`${
                            pathname === '/about' ? 'text-black font-semibold text-xl text-center' : 'text-[#646464] hover:text-primary text-xl text-center'
                          }`}
                        >
                          ABOUT 
                        </Link>
                        <Link
                          href="/works"
                          className={`${
                            pathname === '/works' ? 'text-black font-semibold text-xl text-center' : 'text-[#646464] hover:text-primary text-xl text-center'
                          }`}
                        >
                          MY WORKS
                        </Link>
                      </nav>

                      <Btn name="Hire Me"/>

                    </div> 
                  </div>
                </div>
              )}      
          </div>
      </div>
      

      {/* Tab & Desktop */}
      <div className="hidden md:hidden lg:flex lg:flex-wrap top-2 left-4 md:left-60 bg-none md:bg-none justify-between lg:px-24 md:px-16 py-4 m-0 z-50 items-center">
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
