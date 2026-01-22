'use client'

import Link from "next/link";
import { useState, useEffect } from "react";
import { Icon } from '@iconify/react';


export default function Btn() {
    const [isVisible, setIsVisible] = useState(false); 
    
    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) { // Adjust scroll depth as needed (e.g., 300px)
        setIsVisible(true);
        } else {
        setIsVisible(false);
        }
    };
    
    // Scroll the page to the top smoothly
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    if (!isVisible) return null; // Don't render if not visible

  return (
    <div>
        <Icon onClick={scrollToTop} className="fixed bg-black rounded-full text-3xl text-white cursor-pointer z-10 p-8 w-24 h-24 bottom-5 right-5 hover:bg-transparent hover:text-black border-white hover:border-black hover:border-2" icon="prime:arrow-up"  />
    </div>
  )
}